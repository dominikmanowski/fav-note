import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const Twitters = ({ twitters }) => (
  <GridTemplate pageType="twitters">
    {twitters.map(({ title, content, created, id, twitterName }) => (
      <Card
        cardType="twitters"
        title={title}
        content={content}
        created={created}
        key={id}
        id={id}
        twitterName={twitterName}
      />
    ))}
  </GridTemplate>
);

Twitters.propTypes = {
  twitters: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.string,
      created: PropTypes.string,
      key: PropTypes.number,
      id: PropTypes.number,
      twitterName: PropTypes.string,
    }),
  ).isRequired,
};

const mapStateToProps = ({ twitters }) => ({ twitters });

export default connect(mapStateToProps)(Twitters);
