import React from 'react'

const Blog = () => {
  return (
    <article className="container-md h-100">
      <h2 className="display-3 mb-5"><strong><i>Mis artículos</i></strong></h2>
      <h2 className="mb-3">2023</h2>
      <dl className="row fs-5">
        <dt className="col-sm-1">
          <img src="https://mdbcdn.b-cdn.net/docs/standard/extended/profiles/assets/featured.jpg"
            className="img-thumbnail rounded float-start"
            alt="...">
          </img>
        </dt>
        <dt className="col-sm-2">Description lists</dt>
        <dd className="col-sm-5">A description list is perfect for defining terms.</dd>
      </dl>
      <dl className="row fs-5">
        <dt className="col-sm-1"><img src="https://mdbcdn.b-cdn.net/docs/standard/extended/profiles/assets/featured.jpg" className="img-thumbnail rounded float-start" alt="..."></img></dt>
        <dt className="col-sm-2">Description lists</dt>
        <dd className="col-sm-5">A description list is perfect for defining terms.</dd>
      </dl>

    </article>
  )
}

export default Blog