/**
 * Copyright 2017, Google, Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const {assert} = require('chai');
const cp = require('child_process');
const uuid = require('uuid');

const execSync = cmd => cp.execSync(cmd, {encoding: 'utf-8'});
const cmd = 'node logs';
const logName = `nodejs-logging-logs-test-${uuid.v4()}`;
const message = 'Hello world!';

describe('logs', () => {
  it('should write a log entry', () => {
    const output = execSync(
      `${cmd} write ${logName} '{"type":"global"}' '{"message":"${message}"}'`
    );
    assert.include(output, `Wrote to ${logName}`);
  });

  it('should write a simple log entry', () => {
    const output = execSync(`${cmd} write-simple ${logName}`);
    assert.include(output, `Wrote to ${logName}`);
  });
});
