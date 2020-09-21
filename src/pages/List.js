import React, { useState, useEffect, Fragment } from "react"
import { Container } from '../components/styledComponents';
import { getServer } from '../libs/api/mirageServers';

function List(props) {
  /**
   * @description execute getApiUsers function - fetch and create json file of items from mirage server
   */
  getServer();

  let [listItems, setListItems] = useState([])

  useEffect(() => {
    fetch('/api/listItems')
      .then((res) => res.json())
      .then((json) => {
        setListItems(json.listItems)
      })
  }, [])

  return (
  <Fragment>
    <Container>
      <h2>A couple of things about Holly:</h2>
      <ul>
        {listItems.map((listItems) => (
          <li key={listItems.id}>{listItems.desc}</li>
        ))}
      </ul>
    </Container>
  </Fragment>
  )
}

export default List;