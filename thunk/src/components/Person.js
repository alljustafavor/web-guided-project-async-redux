import React from 'react';
import { connect, useSelector } from 'react-redux';
import { getPerson } from './../actions/index';

export const URL = "https://randomuser.me/api=/"

const Person = (props) => {

  const { person, isFetching, error, getPerson } = props

  if (error) {
    return <h2>We got an error: {error}</h2>;
  }

  if (isFetching) {
    return <h2>Fetching person for ya!</h2>;
  }

  return (
    <>
      <div>
        <h2>Say Hi to: {person.name.first} {person.name.last}</h2>
        <img src={person.picture.large} alt='picture of random person' />
      </div>
      <button onClick={() => {getPerson()}}>Get new person</button>
    </>
  );
};

const mapStateToProps = state => {
  return {
    person: state.person,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { getPerson })(Person);