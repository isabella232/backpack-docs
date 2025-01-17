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

import sassdocLogo from '../../static/sassdoc-logo.svg';

import STYLES from './MarkdownPage.scss';

import { cssModules } from 'backpack/packages/bpk-react-utils';
import BpkLink from 'backpack/packages/bpk-component-link';
import BpkButton from 'backpack/packages/bpk-component-button';

const getClassName = cssModules(STYLES);

export const PLATFORMS = {
  android: 'android',
  ios: 'ios',
  native: 'native',
  compose: 'compose',
  swiftui: 'swiftui',
  web: 'web',
};

export type PlatformType = $Keys<typeof PLATFORMS>;

type Props = {
  documentationId: ?string,
  fileName: ?string,
  githubPath: ?string,
  platform: ?PlatformType,
  sassdocId: ?string,
};

const AdditionalLinks = (props: Props) => {
  const { documentationId, fileName, githubPath, platform, sassdocId } = props;

  if (platform && !Object.keys(PLATFORMS).includes(platform)) {
    throw new Error(
      `${platform} is not a valid platform. Must be one of ${Object.keys(
        PLATFORMS,
      ).join(' ')}.`,
    );
  }

  return (
    <div className={getClassName('bpkdocs-markdown-page__additional-links')}>
      <div>
        {/* Android view Maven Central link */}
        {platform && platform === PLATFORMS.android && (
          <BpkLink
            href="https://search.maven.org/artifact/net.skyscanner.backpack/backpack-android"
            blank
            className={getClassName('bpkdocs-markdown-page__link')}
          >
            <img
              src="https://img.shields.io/maven-central/v/net.skyscanner.backpack/backpack-android"
              alt="View on Maven Central"
            />
          </BpkLink>
        )}

        {/* Android compose Maven Central link */}
        {platform && platform === PLATFORMS.compose && (
          <BpkLink
            href="https://search.maven.org/artifact/net.skyscanner.backpack/backpack-compose"
            blank
            className={getClassName('bpkdocs-markdown-page__link')}
          >
            <img
              src="https://img.shields.io/maven-central/v/net.skyscanner.backpack/backpack-compose"
              alt="View on Maven Central"
            />
          </BpkLink>
        )}

        {/* UIKit CocoaPod link */}
        {platform && platform === PLATFORMS.ios && (
          <BpkLink
            href="https://cocoapods.org/pods/Backpack"
            blank
            className={getClassName('bpkdocs-markdown-page__link')}
          >
            <img
              src="https://img.shields.io/cocoapods/v/Backpack.svg?style=flat"
              alt="View on CocoaPods"
            />
          </BpkLink>
        )}
        {/* SwiftUI CocoaPod link */}
        {platform && platform === PLATFORMS.swiftui && (
          <BpkLink
            href="https://cocoapods.org/pods/Backpack-SwiftUI"
            blank
            className={getClassName('bpkdocs-markdown-page__link')}
          >
            <img
              src="https://img.shields.io/cocoapods/v/Backpack-SwiftUI.svg?style=flat"
              alt="View on CocoaPods"
            />
          </BpkLink>
        )}

        {/* RN npm link */}
        {platform && platform === PLATFORMS.native && (
          <BpkLink
            href="https://www.npmjs.com/package/backpack-react-native"
            blank
            className={getClassName('bpkdocs-markdown-page__link')}
          >
            <img
              src="https://img.shields.io/npm/v/backpack-react-native"
              alt="View backpack-react-native on npm"
            />
          </BpkLink>
        )}

        {/* Web npm link */}
        {platform && platform === PLATFORMS.web && githubPath && (
          <BpkLink
            href={`https://www.npmjs.com/package/${githubPath}`}
            blank
            className={getClassName('bpkdocs-markdown-page__link')}
          >
            <img
              src={`https://img.shields.io/npm/v/${githubPath}.svg`}
              alt={`View ${githubPath} on npm`}
            />
          </BpkLink>
        )}

        {/* Web sassdoc link */}
        {platform && platform === PLATFORMS.web && sassdocId && (
          <BpkLink
            href={`/sassdoc/#${sassdocId}`}
            blank
            className={getClassName('bpkdocs-markdown-page__link')}
          >
            <img
              width="55"
              height="20"
              src={`/${sassdocLogo}`}
              alt={`View ${sassdocId} mixins and variables on Backpack's Sassdoc`}
            />
          </BpkLink>
        )}

        {/* Android view documentation link */}
        {platform && platform === PLATFORMS.android && documentationId && (
          <BpkLink
            href={`/android/Backpack/${documentationId}`}
            blank
            className={getClassName('bpkdocs-markdown-page__link')}
          >
            <img
              src="https://img.shields.io/badge/Class%20reference-Android-blue"
              alt="View class reference"
            />
          </BpkLink>
        )}

        {/* Android compose documentation link */}
        {platform && platform === PLATFORMS.compose && documentationId && (
          <BpkLink
            href={`/android/backpack-compose/${documentationId}`}
            blank
            className={getClassName('bpkdocs-markdown-page__link')}
          >
            <img
              src="https://img.shields.io/badge/Class%20reference-Android-blue"
              alt="View class reference"
            />
          </BpkLink>
        )}

        {/* iOS UIKit documentation link */}
        {platform && platform === PLATFORMS.ios && documentationId && (
          <BpkLink
            href={`/ios/versions/latest/uikit/Classes/${documentationId}.html`}
            blank
            className={getClassName('bpkdocs-markdown-page__link')}
          >
            <img
              src="https://img.shields.io/badge/Class%20reference-iOS-blue"
              alt="View class reference"
            />
          </BpkLink>
        )}

        {/* iOS SwiftUI documentation link */}
        {platform && platform === PLATFORMS.swiftui && documentationId && (
          <BpkLink
            href={`/ios/versions/latest/swiftui/Structs/${documentationId}.html`}
            blank
            className={getClassName('bpkdocs-markdown-page__link')}
          >
            <img
              src="https://img.shields.io/badge/Class%20reference-iOS-blue"
              alt="View class reference"
            />
          </BpkLink>
        )}

        {/* Android view GitHub link */}
        {platform && platform === PLATFORMS.android && githubPath && (
          <BpkLink
            href={`https://github.com/Skyscanner/backpack-android/tree/main/Backpack/src/main/java/net/skyscanner/backpack/${githubPath}`}
            blank
            className={getClassName('bpkdocs-markdown-page__link')}
          >
            <img
              src="https://img.shields.io/badge/Source%20code-GitHub-lightgrey"
              alt="View source code on GitHub"
            />
          </BpkLink>
        )}

        {/* Android compose GitHub link */}
        {platform && platform === PLATFORMS.compose && githubPath && (
          <BpkLink
            href={`https://github.com/Skyscanner/backpack-android/tree/main/backpack-compose/src/main/kotlin/net/skyscanner/backpack/compose/${githubPath}`}
            blank
            className={getClassName('bpkdocs-markdown-page__link')}
          >
            <img
              src="https://img.shields.io/badge/Source%20code-GitHub-lightgrey"
              alt="View source code on GitHub"
            />
          </BpkLink>
        )}

        {/* iOS GitHub link */}
        {platform && platform === PLATFORMS.ios && githubPath && (
          <BpkLink
            href={`https://github.com/Skyscanner/backpack-ios/tree/main/Backpack/${githubPath}`}
            blank
            className={getClassName('bpkdocs-markdown-page__link')}
          >
            <img
              src="https://img.shields.io/badge/Source%20code-GitHub-lightgrey"
              alt="View source code on GitHub"
            />
          </BpkLink>
        )}

        {/* SwiftUI GitHub link */}
        {platform && platform === PLATFORMS.swiftui && githubPath && (
          <BpkLink
            href={`https://github.com/Skyscanner/backpack-ios/tree/main/Backpack-SwiftUI/${githubPath}`}
            blank
            className={getClassName('bpkdocs-markdown-page__link')}
          >
            <img
              src="https://img.shields.io/badge/Source%20code-GitHub-lightgrey"
              alt="View source code on GitHub"
            />
          </BpkLink>
        )}

        {/* RN GitHub link */}
        {platform && platform === PLATFORMS.native && githubPath && (
          <BpkLink
            href={`https://github.com/Skyscanner/backpack-react-native/tree/main/lib/${githubPath}`}
            blank
            className={getClassName('bpkdocs-markdown-page__link')}
          >
            <img
              src="https://img.shields.io/badge/Source%20code-GitHub-lightgrey"
              alt="View source code on GitHub"
            />
          </BpkLink>
        )}

        {/* Web GitHub link */}
        {platform && platform === PLATFORMS.web && githubPath && (
          <BpkLink
            href={`https://github.com/Skyscanner/backpack/tree/main/packages/${githubPath}`}
            blank
            className={getClassName('bpkdocs-markdown-page__link')}
          >
            <img
              src="https://img.shields.io/badge/Source%20code-GitHub-lightgrey"
              alt="View source code on GitHub"
            />
          </BpkLink>
        )}
      </div>

      {fileName && (
        <BpkButton
          secondary
          blank
          className={getClassName('bpkdocs-markdown-page__edit-button')}
          href={`https://github.com/skyscanner/backpack-docs/edit/main${fileName}`}
        >
          Edit page
        </BpkButton>
      )}
    </div>
  );
};

export default AdditionalLinks;
