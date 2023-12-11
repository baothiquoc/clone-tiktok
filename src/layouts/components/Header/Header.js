import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';
import config from '~/config';

import Button from '~/components/Button';
import styles from './Header.module.scss';
import image from '~/assets/image';
import Menu from '~/components/Popper/Menu';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const currentUser = true;

    //Handle logic
    const handleOnChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                //Handle change language
                break;
            default:
        }
    };
    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@sandlingggg',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routers.home}>
                    {' '}
                    <img src={image.logo} alt="TikTok" />{' '}
                </Link>
                <Search />
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 50]} content="Upload video" placement="bottom">
                                <button className={cx('actions-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy
                                className={cx('custom-tippy-message')}
                                delay={[0, 50]}
                                content="Message"
                                placement="bottom"
                            >
                                <button className={cx('actions-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                                <button className={cx('actions-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleOnChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/408798112_997939874603626_559012522344764812_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=plJ39ALghucAX9Sbj-W&_nc_ht=scontent.fhan15-1.fna&oh=00_AfAJpmHIu4seBuauYX-jbfmFngNNnvXW8qUYVyzurIY9eA&oe=657BF82E"
                                alt="Nguyen Van A"
                                fallback="https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-6/290373099_3299559506981099_2086681085201524195_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=j-kGOSFxEkwAX-MvOdM&_nc_ht=scontent.fhan15-2.fna&oh=00_AfAj_gWOurrZbuahI2C2FmTj6RjdpC9yV1XPXDgVO1yS_Q&oe=657BD217"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
