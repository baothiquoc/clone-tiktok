import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';

import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/393337958_122114782100058609_414153524274532818_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=yUhur2AcnCAAX8ErN6O&_nc_ht=scontent.fhan15-1.fna&oh=00_AfBIKnJj4UfjKDHzVmORgC3hzraCbFbnO29SpLru0zKEuA&oe=657BCE58"
                    alt=""
                />
                <Button className={cx('follow-btn')} primary>
                    Follow
                </Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>ttnguien_</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Ngoen Ngoen</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
