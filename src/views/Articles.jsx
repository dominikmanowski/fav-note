import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const Articles = ({ articles }) => (
  <GridTemplate pageType="articles">
    {articles.map(({ id, title, content, created, articleUrl }) => (
      <Card
        cardType="articles"
        title={title}
        content={content}
        created={created}
        articleUrl={articleUrl}
        key={title}
        id={id}
      />
    ))}
  </GridTemplate>
);

Articles.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.string,
      created: PropTypes.string,
      key: PropTypes.numbers,
      id: PropTypes.number,
      twitterName: PropTypes.string,
    }),
  ).isRequired,
};

const mapStateToProps = ({ articles }) => ({
  articles,
});

export default connect(mapStateToProps)(Articles);
