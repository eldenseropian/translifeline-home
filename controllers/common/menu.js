'use strict';

const MenuItem = require('../../models/menu_item');

function getMenuData() {
  return [
    new MenuItem('About Us', null, [
      new MenuItem('Mission', '/mission'),
      new MenuItem('FAQ', '/faq'),
      new MenuItem('Contact', '/contact')
    ]),
    new MenuItem('Survey', 'http://www.transmentalhealthsurvey.org'),
    new MenuItem('Get Involved', null, [
      new MenuItem('Ways to Help', '/help'),
      new MenuItem('Volunteer', 'http://apply.translifeline.org'),
      new MenuItem('Host A Fundraiser', '/hostafundraiser'),
      new MenuItem('Host Resources', '/host-resources'),
    ]),
    new MenuItem('Resources', 'https://radremedy.org/'),
    new MenuItem('Donate', '/donate'),
    new MenuItem('Store', 'http://www.redbubble.com/people/translifeline/shop'),
    new MenuItem('Blog', 'https://medium.com/@Translifeline'),
    new MenuItem('Login', 'http://hotline.translifeline.org/login')
  ];
}

module.exports = getMenuData;
