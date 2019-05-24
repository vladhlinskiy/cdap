/*
 * Copyright © 2017-2018 Cask Data, Inc.
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

angular.module(PKG.name + '.commons')
  .directive('caskHeader', function(reactDirective) {
    return reactDirective(window.CaskCommon.AppHeader);
  })
  .directive('keyValuePairs', function(reactDirective) {
    return reactDirective(window.CaskCommon.KeyValuePairs);
  })
  .directive('dataprep', (reactDirective) => {
    return reactDirective(window.CaskCommon.DataPrepHome);
  })
  .directive('caskResourceCenterButton', function(reactDirective) {
    return reactDirective(window.CaskCommon.ResourceCenterButton);
  })
  .directive('pipelineSummary', function(reactDirective) {
    return reactDirective(window.CaskCommon.PipelineSummary);
  })
  .directive('rulesEngineHome', function(reactDirective) {
    return reactDirective(window.CaskCommon.RulesEngineHome);
  })
  .directive('pipelineNodeMetricsGraph', function(reactDirective) {
    return reactDirective(window.CaskCommon.PipelineNodeMetricsGraph);
  })
  .directive('statusAlertMessage', function(reactDirective) {
    return reactDirective(window.CaskCommon.StatusAlertMessage);
  })
  .directive('loadingIndicator', function(reactDirective) {
    return reactDirective(window.CaskCommon.LoadingIndicator);
  })
  .directive('pipelineTriggersSidebars', function(reactDirective) {
    return reactDirective(window.CaskCommon.PipelineTriggersSidebars);
  })
  .directive('pipelineDetailsTopPanel', function(reactDirective) {
    return reactDirective(window.CaskCommon.PipelineDetailsTopPanel);
  })
  .directive('pipelineScheduler', function(reactDirective) {
    return reactDirective(window.CaskCommon.PipelineScheduler);
  })
  .directive('pipelineDetailsRunLevelInfo', function(reactDirective) {
    return reactDirective(window.CaskCommon.PipelineDetailsRunLevelInfo);
  })
  .directive('globalFooter', function(reactDirective) {
    return reactDirective(window.CaskCommon.Footer);
  })
  .directive('iconSvg', function(reactDirective) {
    return reactDirective(window.CaskCommon.IconSVG);
  })
  .directive('authRefresher', function(reactDirective) {
    return reactDirective(window.CaskCommon.AuthRefresher);
  })
  .directive('toggleSwitch', function(reactDirective) {
    return reactDirective(window.CaskCommon.ToggleSwitch);
  })
  .directive('markdown', function(reactDirective) {
    return reactDirective(window.CaskCommon.Markdown);
  })
  .directive('codeEditor', function(reactDirective) {
    return reactDirective(window.CaskCommon.CodeEditor);
  })
  .directive('textBox', function(reactDirective) {
    return reactDirective(window.CaskCommon.TextBox);
  });
