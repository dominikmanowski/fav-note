import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import DetailsTemplate from 'templates/DetailsTemplate';
import routes from 'routes';

const dummyArticle = {
  id: 1,
  title: 'Lorem ipsum dolor sit amet',
  content:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
  twitterName: 'hello_roman',
  articleUrl: 'https://google.com/',
  created: '1 day',
};

const DetailsPage = ({ match: { path } }) => {
  const [pageType, setPageType] = useState('notes');

  useEffect(() => {
    switch (path) {
      case routes.twitter:
        setPageType('twitters');
        break;
      case routes.article:
        setPageType('articles');
        break;
      default:
        setPageType('notes');
        break;
    }
  }, [path]);
  return (
    <DetailsTemplate
      pageType={pageType}
      title={dummyArticle.title}
      created={dummyArticle.created}
      content={dummyArticle.content}
      articleUrl={dummyArticle.articleUrl}
      twitterName={dummyArticle.twitterName}
    />
  );
};

DetailsPage.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }).isRequired,
};

export default DetailsPage;
