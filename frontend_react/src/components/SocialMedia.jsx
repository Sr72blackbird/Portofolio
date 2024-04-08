import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import {FaXTwitter} from 'react-icons/fa6';
const SocialMedia = () => (
  <div className="app__social">
    <div>
      <FaXTwitter />
    </div>
    <div>
      <FaFacebookF />
    </div>
    <div>
      <BsInstagram />
    </div>
  </div>
);

export default SocialMedia;