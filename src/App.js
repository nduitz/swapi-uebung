import React, { Component, Fragment } from 'react'
import PeopleList from './components/people-list';

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <PeopleList></PeopleList>
      </Fragment>
    )
  }
}
