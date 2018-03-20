/*
 * Copyright © 2018 Cask Data, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
package co.cask.cdap.report

case class RecordBuilder(namespace: String, program: String, run: String, statuses: scala.collection.Seq[(String, Long)], startInfo: Option[StartInfo]) {

//  def this() {
//    this("", "", Vector.empty)
//  }

  def merge(other: RecordBuilder): RecordBuilder = {
    val namespace = if (this.namespace.isEmpty) other.namespace else this.namespace
    val program = if (this.program.isEmpty) other.program else this.program
    val run = if (this.run.isEmpty) other.run else this.run
    val statuses = this.statuses ++ other.statuses
    val startInfo = if (this.startInfo.isEmpty) other.startInfo else this.startInfo
//    println("Other = %s".format(other))
//    println("This = %s".format(this))
    val r = RecordBuilder(namespace, program, run, statuses, startInfo)
//    println("===> Merged = %s".format(r))
    r
  }

  def build(): Record = {
    import ReportGen._
//    println("this = %s".format(this))
    val statusTimeMap = statuses.groupBy(_._1).map(v => (v._1, v._2.map(_._2).min))
    val start = statusTimeMap.get("STARTING")
    val running = statusTimeMap.get("RUNNING")
    val completed = statusTimeMap.get("COMPLETED")
    val killed = statusTimeMap.get("KILLED")
    val failed = statusTimeMap.get("FAILED")
    LOG.info("completed={}", completed)
    LOG.info("killed={}", killed)
    LOG.info("failed={}", failed)
    val end =
      if (completed.isDefined) completed
      else if (killed.isDefined) killed
      else if (failed.isDefined) failed
      else None
    val duration = if (start.isDefined && end.isDefined) Some(end.get - start.get) else None
    val user = if (startInfo.isDefined) Some(startInfo.get.user) else None
    val runtimeArgs = if (startInfo.isDefined) Some(startInfo.get.runtimeArgs) else None
    val r = Record(namespace, program, run, start, running, end, duration, user, runtimeArgs)
    LOG.info("RecordBuilder={}", this)
    LOG.info("record = {}", r)
    r
  }
}

case class StartInfo(user: String, runtimeArgs: scala.collection.Map[String, String])