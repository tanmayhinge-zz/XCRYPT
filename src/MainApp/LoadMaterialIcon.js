import React from 'react';
// import Icon from '@material-ui/core/Icon';
import SvgIcon from '@material-ui/core/SvgIcon';

const Email = React.lazy(() => import('@material-ui/icons/EmailOutlined'));
const Public = React.lazy(() => import('@material-ui/icons/PublicOutlined'));
const Shop = React.lazy(() => import('@material-ui/icons/ShoppingCartOutlined'));
const Card = React.lazy(() => import('@material-ui/icons/CreditCardOutlined'));
const Link = React.lazy(() => import('@material-ui/icons/LinkOutlined'));
const Wifi = React.lazy(() => import('@material-ui/icons/WifiLockOutlined'));
const Bank = React.lazy(() => import('@material-ui/icons/AccountBalanceOutlined'));
//add as requried 



// In order to add icons in the add category dialog add it's name in icon list
// and set its icon mapping
export const iconList = [
  'public', 'mail', 'shop', 'card',
  'link', 'wifi', 'bank', 'book',
  'pet', 'cloud', 'fitness', 'work',
  'school'];
const mappings = {
  mail: Email,
  public: Public,
  shop: Shop,
  card: Card,
  link: Link,
  wifi: Wifi,
  bank: Bank,
};

/**
 * Component to help load a material icon which is needed by the app.
 */
export default (props) => {
  const Component = mappings[props.name];
  return (
    <React.Suspense fallback={<SvgIcon {...props} />}>
      <Component {...props} />
    </React.Suspense>
  );
};
