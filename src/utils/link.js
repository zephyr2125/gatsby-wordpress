import React from 'react'
import { Link as GatsbyLink } from 'gatsby'

const Link = props => {
  if (props.to && props.to.indexOf('//') === -1 && props.to.indexOf('mailto:') === -1 && props.to.indexOf('tel:') === -1) {
    return <GatsbyLink {...props}>{props.children}</GatsbyLink>
  }

  return (
    <a {...props} href={props.to} target='_blank' rel='nofollow noopener noreferrer'>
      { props.children }
    </a>
  )
}

export default Link