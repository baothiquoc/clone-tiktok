import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/e0c969592c15c2b805ecd9f63632bc40~c5_100x100.jpeg?x-expires=1702486800&x-signature=CvLS0Lc%2F%2BRHgz2xoRPGphVqQZJw%3D"
                alt=""
            />
            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <strong>ttnguien_</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Ngoen Ngoen</p>
            </div>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
