import React from "react";

import { useIdentityContext } from "react-netlify-identity-widget";
const Profile = () => {
  const { user } = useIdentityContext();
  return (
    <>
      <h2>Your profile</h2>
      <ul>
        <li>Name: {user.user_metadata && user.user_metadata.full_name}</li>
        <li>E-mail: {user.email}</li>
      </ul>
      <h2>Some lorem ipsum</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
        quibusdam sint voluptatum, qui repudiandae consequatur adipisci
        similique facilis ex rem? Temporibus, modi dolores cum assumenda vero
        corrupti doloremque sint quaerat.
      </p>
      <p>
        Reiciendis nam pariatur id optio, molestiae asperiores officia
        distinctio dolor nisi eligendi. Possimus architecto exercitationem unde
        quasi porro rerum debitis eveniet aperiam tenetur. Rerum, quisquam sequi
        nulla iure aut aspernatur!
      </p>
      <p>
        In laboriosam autem optio blanditiis. Est illo, nobis neque aspernatur
        ipsum nostrum, eius hic optio ipsa, perspiciatis accusantium amet? Omnis
        animi quo dolore ipsam quae eveniet excepturi blanditiis velit quasi!
      </p>
      <h3>The best lines from lorem</h3>
      <p>
        Voluptates, error? Maxime id odit est incidunt dolore voluptatibus
        deleniti ea rem sint quos enim, eligendi pariatur nobis perferendis?
        Temporibus, blanditiis magni voluptas repellat beatae animi magnam quae
        laudantium perspiciatis.
      </p>
    </>
  );
};

export default Profile;
