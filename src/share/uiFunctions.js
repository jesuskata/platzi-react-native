// Dependencies
import React from 'react';

// Components
import Empty from '../main/components/Empty';
import VerticalSeparator from '../main/components/VerticalSeparator';
import HorizontalSeparator from '../main/components/HorizontalSeparator';
import Suggestion from '../main/components/Suggestion';

export const renderEmpty = () => <Empty text="There is no suggestions." />;

export const verticalSeparator = () => <VerticalSeparator />;

export const horizontalSeparator = () => <HorizontalSeparator />;

export const renderItem = ({ item }) => <Suggestion {...item} />;

export const keyExtractor = item => item.id.toString();
