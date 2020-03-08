import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/';

const Notes = ({ notes }) => (
  <GridTemplate pageType="notes">
    {notes.map(({ title, content, created, id }) => (
      <Card
        id={id}
        cardType="notes"
        title={title}
        content={content}
        created={created}
        key={id}
      />
    ))}
  </GridTemplate>
);

Notes.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.string,
      created: PropTypes.string,
      key: PropTypes.string,
      id: PropTypes.number,
    }),
  ).isRequired,
};

const mapStateToProps = ({ notes }) => ({ notes });

export default connect(mapStateToProps)(Notes);
