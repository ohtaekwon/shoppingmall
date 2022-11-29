import Link from "next/link";
import React, { FC } from "react";
import { useRecoilState } from "recoil";
import styled, { FlattenSimpleInterpolation } from "styled-components";
import { detailIdAtoms } from "../../../recoil";
import { ROUTE_PATH } from "../../../utils/constants";

type Props = {
  id: string;
  sizeStyle: FlattenSimpleInterpolation;
  image_url: string;
};

const { ROUTE_PATH_DETAIL } = ROUTE_PATH;

const CardBody: FC<Props> = (props: Props): JSX.Element => {
  const { id, sizeStyle, image_url } = props;
  const [detailAtom, setDetailAtom] = useRecoilState(detailIdAtoms);

  const handleMouseOver = (e) => {
    console.log(e.target.alt);
    if (detailAtom === e.target.alt) return;
    setDetailAtom(e.target.alt);
  };

  return (
    <StyledBody sizeStyle={sizeStyle}>
      <Link href={`${ROUTE_PATH_DETAIL}/${id}`} legacyBehavior>
        <Image src={image_url} alt={id} onMouseOver={handleMouseOver} />
      </Link>
    </StyledBody>
  );
};
export default CardBody;
const StyledBody = styled.div<{ sizeStyle: FlattenSimpleInterpolation }>`
  ${(p) => p.sizeStyle}
  width: var(--card-width, 180px);
`;
const Image = styled.img`
  width: 100%;
  height: 385px;
  object-fit: cover;
  border-radius: 4px;
  cursor: pointer;
`;
