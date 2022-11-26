import React, { FC } from "react";
import { ICONS_ITEMS_TYPE, IconType } from "../../../types/ui/icon";

import { HiShoppingBag } from "react-icons/hi";
import { RiLoginBoxFill } from "react-icons/ri";
import { FcLike } from "react-icons/fc";
import { FaUser, FaSearch } from "react-icons/fa";
import { BiCommentDetail } from "react-icons/bi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Icons: FC<IconType> = (props: IconType): JSX.Element => {
  const { size, name, color } = props;

  const ICONS_ITEMS: ICONS_ITEMS_TYPE = {
    LEFT_OUTLINE: <AiOutlineLeft size={size} color={color} />,
    RIGHT_OUTLINE: <AiOutlineRight size={size} color={color} />,
    LEFT_CIRCLE: <BsArrowLeftCircle size={size} color={color} />,
    RIGHT_CIRCLE: <BsArrowRightCircle size={size} color={color} />,
    SHOPPING_BAG: <HiShoppingBag size={size} color={color} />,
    LOGIN_BOX: <RiLoginBoxFill size={size} color={color} />,
    LIKE_EMPTY: <AiOutlineHeart size={size} color={color} />,
    LIKE_FILL: <AiFillHeart size={size} color={color} />,
    LIKE_COLOR: <FcLike size={size} color={color} />,
    USER: <FaUser size={size} color={color} />,
    COMMENT: <BiCommentDetail size={size} color={color} />,
    SEARCH: <FaSearch size={size} color={color} />,
  };
  const styledIcon = ICONS_ITEMS[name];

  return <>{styledIcon}</>;
};
export default Icons;