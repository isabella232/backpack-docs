/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2016-2019 Skyscanner Ltd
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

import React, { type Node } from 'react';
import PropTypes from 'prop-types';
import { cssModules } from 'bpk-react-utils';
import BpkContentContainer from 'bpk-component-content-container';
import { BpkList, BpkListItem } from 'bpk-component-list';
import BpkLink from 'bpk-component-link';
import BpkText, { WEIGHT_STYLES } from 'bpk-component-text';

import BpkMarkdownRenderer from '../DocsPageBuilder/BpkMarkdownRenderer';
import getMarkdownString from '../../helpers/markdown-helper';

import STYLES from './ComponentPage.scss';

const getClassName = cssModules(STYLES);

type ContentType = string | Node;

type Props = {
  examples: Array<{
    id: string,
    title: string,
    blurb?: ContentType,
    content?: ContentType,
  }>,
  readme: string,
  additionalContent: ?Array<ContentType>,
};

const NewDocsPage = (props: Props) => {
  const { additionalContent, examples, readme } = props;
  return (
    <div>
      <div className={getClassName('bpkdocs-component-page__section')}>
        <BpkText
          tagName="h2"
          weight={WEIGHT_STYLES.bold}
          className={getClassName(
            'bpkdocs-component-page__table-of-contents-heading',
          )}
        >
          In this section
        </BpkText>
        <BpkList>
          {examples.map(example => (
            <BpkListItem key={example.id}>
              <BpkLink href={`#${example.id}`}>{example.title}</BpkLink>
            </BpkListItem>
          ))}
        </BpkList>
      </div>
      {examples.map(example => (
        <div
          key={example.id}
          id={example.id}
          className={getClassName('bpkdocs-component-page__section')}
        >
          <h2
            className={getClassName('bpkdocs-component-page__section-heading')}
          >
            {example.title}
          </h2>
          <div>{example.blurb}</div>
          <div>{example.content}</div>
        </div>
      ))}
      <div className={getClassName('bpkdocs-component-page__section')}>
        <h2 className={getClassName('bpkdocs-component-page__section-heading')}>
          Readme
        </h2>
        <BpkContentContainer bareHtml alternate>
          <BpkMarkdownRenderer source={getMarkdownString(readme)} />
        </BpkContentContainer>
      </div>
      {additionalContent &&
        additionalContent.map(content => (
          <div className={getClassName('bpkdocs-component-page__section')}>
            {content}
          </div>
        ))}
    </div>
  );
};

const contentPropType = PropTypes.oneOfType([PropTypes.string, PropTypes.node]);

NewDocsPage.propTypes = {
  examples: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      blurb: contentPropType,
      content: contentPropType,
    }),
  ).isRequired,
  readme: PropTypes.node.isRequired,
  additionalContent: PropTypes.arrayOf(contentPropType),
};

NewDocsPage.defaultProps = {
  additionalContent: null,
};

export default NewDocsPage;
