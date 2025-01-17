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

import Web, { metadata as webMetadata } from './WebHorizontalNav.mdx';
import Native, { metadata as nativeMetadata } from './NativeHorizontalNav.mdx';
import Android, {
  metadata as androidMetadata,
} from './AndroidHorizontalNav.mdx';
import IOS, { metadata as iosMetadata } from './IOSHorizontalNav.mdx';

import MarkdownPage from 'components/MarkdownPage';
import IntroBlurb from 'components/IntroBlurb';
import DocsPageWrapper from 'components/DocsPageWrapper';

const blurb = [
  <IntroBlurb>
    A simple navigation component, ideal for representing a section of a page
    that links to other pages or views within the page.
  </IntroBlurb>,
];

const Page = () => (
  <DocsPageWrapper
    title="Horizontal navigation"
    blurb={blurb}
    webSubpage={<MarkdownPage content={Web} {...webMetadata} />}
    nativeSubpage={<MarkdownPage content={Native} {...nativeMetadata} />}
    androidSubpage={<MarkdownPage content={Android} {...androidMetadata} />}
    iosSubpage={<MarkdownPage content={IOS} {...iosMetadata} />}
  />
);

export default Page;
