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

import IOS, { metadata as iosMetadata } from './IOSBottomSheet.mdx';
import Android, { metadata as androidMetadata } from './AndroidBottomSheet.mdx';

import DocsPageWrapper from 'components/DocsPageWrapper';
import IntroBlurb from 'components/IntroBlurb';
import MarkdownPage from 'components/MarkdownPage';

const BottomSheetPage = () => (
  <DocsPageWrapper
    title="Bottom sheet"
    blurb={[
      <IntroBlurb>
        Bottom sheets are views rendered on top of screen content, containing
        supplementary content that are anchored to the bottom of the screen.
      </IntroBlurb>,
    ]}
    androidSubpage={<MarkdownPage content={Android} {...androidMetadata} />}
    iosSubpage={<MarkdownPage content={IOS} {...iosMetadata} />}
  />
);

export default BottomSheetPage;
