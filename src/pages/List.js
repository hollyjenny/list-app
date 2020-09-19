import React, { useState, useEffect, Fragment } from "react"
import { Container } from '../components/Login';
import { getListItems } from '../libs/api/users';


function List(props) {
  /**
   * @description execute getApiUsers function - mirage api with list items
   */
  getListItems();

  /**
   * @description fetch and create json file of items from mirage server
   */
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