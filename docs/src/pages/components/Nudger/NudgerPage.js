/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2016 Skyscanner Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* @flow strict */

import React from 'react';

import Web, { metadata as webMetadata } from './WebNudger.mdx';
import Native, { metadata as nativeMetadata } from './NativeNudger.mdx';
import IOS, { metadata as iosMetadata } from './IOSNudger.mdx';
import Android, { metadata as androidMetadata } from './AndroidNudger.mdx';

import MarkdownPage from 'components/MarkdownPage';
import DocsPageWrapper from 'components/DocsPageWrapper';
import IntroBlurb from 'components/IntroBlurb';

const Page = () => (
  <DocsPageWrapper
    title="Nudger"
    blurb={[
      <IntroBlurb>
        Nudgers allow users to quickly specify a value within a given range.
      </IntroBlurb>,
    ]}
    webSubpage={<MarkdownPage content={Web} {...webMetadata} />}
    nativeSubpage={<MarkdownPage content={Native} {...nativeMetadata} />}
    iosSubpage={<MarkdownPage content={IOS} {...iosMetadata} />}
    androidSubpage={<MarkdownPage content={Android} {...androidMetadata} />}
  />
);

export default Page;
