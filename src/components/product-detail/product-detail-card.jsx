import { PropTypes } from 'prop-types';
import { Box, Button, Card, CircularProgress, Typography, styled } from '@mui/material';
import { CenterAlignedContainer } from '../shared/center-aligned-container';
import MessageContainer from '../shared/message-container';
import { ArrowBack } from '@mui/icons-material';
import { useNavigate } from 'react-router';
import { toSentenceCase } from '../../utils/toSentenceCase';
import { formatPrice } from '../../utils/format-price';

const specsKeyMap = {
  id: 'ID',
  title: 'Title',
  rating: 'Rating',
  stock: 'Stock',
  brand: 'Brand',
  category: 'Category'
};

function ProductDetailCard(props) {
  const navigate = useNavigate();

  return (
    <StyledCard>
      <StyledButton onClick={() => navigate('/products')} variant="text">
        <ArrowBack /> Back
      </StyledButton>
      <CardContent {...props} />
    </StyledCard>
  );
}

export default ProductDetailCard;

function CardContent(props) {
  const { isLoading, error, detail } = props;
  if (isLoading && !detail)
    return (
      <CenterAlignedContainer>
        <CircularProgress />
      </CenterAlignedContainer>
    );

  if (error)
    return (
      <CenterAlignedContainer>
        <MessageContainer variant="error" text={error?.message ?? 'Some error occured. Couldnt fetch details'} />
      </CenterAlignedContainer>
    );

  if (detail)
    return (
      <ProductDetailsContainer>
        <ProductThumbnail src={detail.thumbnail}></ProductThumbnail>
        <ProductTitleContainer>
          <Typography variant="h5">{detail.title ?? ''}</Typography>
          <Typography variant="body1">{detail.description}</Typography>
          <Typography variant="h6">{formatPrice(detail.price ?? 0)}</Typography>
          <Typography variant="body2">Discount: {detail.discountPercentage ?? 0}%</Typography>
        </ProductTitleContainer>
        <ProductSpecsContainer>
          <Typography mb={2} pb={1} borderBottom={'1px solid #eee'} variant="h6">
            Specifications
          </Typography>
          <Box className="list">
            {Object.keys(specsKeyMap).map((key) => (
              <Box className="list-item" key={key}>
                <Typography fontWeight="500">{specsKeyMap[key]}:</Typography>
                <Typography>{toSentenceCase(detail[key]?.toString())}</Typography>
              </Box>
            ))}
          </Box>
        </ProductSpecsContainer>
        <ProductImagesContainer>
          <Typography mb={2} pb={1} borderBottom={'1px solid #eee'} variant="h6">
            Images
          </Typography>
          <Box className="image-list">
            {detail.images.map((image, idx) => (
              <img key={`${detail.title}-${idx}`} className="image-item" src={image} alt={`${detail.title}-${idx}`} />
            ))}
          </Box>
        </ProductImagesContainer>
      </ProductDetailsContainer>
    );
}

CardContent.propTypes = {
  isLoading: PropTypes.bool,
  error: PropTypes.string,
  detail: PropTypes.object
};

ProductDetailCard.propTypes = {
  isLoading: PropTypes.bool,
  error: PropTypes.string,
  detail: PropTypes.object
};

const StyledCard = styled(Card)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '1rem',
  borderRadius: '0.625rem',
  boxShadow: '0px 3px 24px 2px rgba(171, 171, 171, 0.14)',
  width: '100%'
}));

const StyledButton = styled(Button)(() => ({
  borderRadius: '0.5rem'
}));

const ProductDetailsContainer = styled(Box)(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '2rem',
  width: '100%',
  marginTop: '1rem',
  padding: '0 1rem 1rem'
}));

const ProductThumbnail = styled('img')(() => ({
  borderRadius: '0.5rem',
  // flex: 1,
  maxHeight: '8rem',
  minWidth: '12rem',
  objectFit: 'contain'
}));

const ProductTitleContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  flex: 1
}));

const ProductSpecsContainer = styled(Box)(() => ({
  minWidth: '100%',
  '.list': {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    columnGap: '2rem',
    rowGap: '0.5rem'
  },
  '.list-item': {
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
    gap: '1rem'
  }
}));

const ProductImagesContainer = styled(Box)(() => ({
  minWidth: '100%',

  '.image-list': {
    display: 'flex',
    gap: '1rem'
  },
  '.image-item': {
    width: '8rem',
    height: '8rem',
    borderRadius: '0.5rem',
    objectFit: 'contain',
    border: '1px solid #eee'
  }
}));
