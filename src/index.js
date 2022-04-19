import contentstack from 'contentstack';
import {
  getAssetsModule, getAssetByQuality, getAssetBySize, getAssetByFormat, getAssetByDimension, cropImageByDimension, cropImageByAspectRatio, cropImageOnlyByAspectRatio, cropImageBySubRegion, cropImageByOffset, cropImageInFailSafeMode, cropImageWithSmartCrop, imageFitMode, trimImage, orientImage, assetPadding, assetPaddingWithBg, setAssetBg, setDevicePixelRatio, setimageBlurEffect, fetchFirstFrame, fetchSharpImage, assetSaturation, assetContrast, assetbrightness, resizeAsset, canvasByWidthHeight, canvasSubRegion, canvasOffset,
} from './assets';
import {
  getAllEntries, getEntryByUrl, getEntryById, getEntryTitle, getAllEntrySection, getEntryUrl, getSeo, fetchExcept, getPublishDetails, fetchOnly, includeEmbeddedItems, getEntryWithReference, getEntryWithoutRef, getSpecificEntryByUrlAndReference, getEntrySpecificByUrlWithoutRef, includeSchema, getContentByDate, getEntriesInAscending, getEntriesInDescending, searchByValue, getLastEntries, setEntryLimit, skipEntries, getEntryByExistParam, getEntryByNotExistParam, entryValueContainedIn, entryValueNotContainedIn, getListOfContentType, entriesNotEqualTo, setEntryPagination, fetchQuery,
} from './entries';

const Stack = contentstack.Stack({
  api_key: process.env.CONTENTSTACK_API_KEY,
  delivery_token: process.env.CONTENTSTACK_DELIVERY_TOKEN,
  environment: process.env.CONTENTSTACK_ENVIRONMENT,
  region: process.env.CONTENTSTACK_REGION
    ? process.env.CONTENTSTACK_REGION
    : 'us',
  host: process.env.CONTENTSTACK_API_HOST
    ? process.env.CONTENTSTACK_API_HOST
    : '',
});

Stack.setHost(process.env.CONTENTSTACK_API_HOST);

export default class ContentStackContentDelivery {
  constructor(credentials) {
    this.locale = credentials.locale;
  }

getAssets = async (assetId) => {
  const isImageHere = await getAssetsModule(
    Stack,
    assetId,
  );
  return isImageHere;
};

getAssetByQuality = async (assetId, quality) => {
  const isImage = await getAssetByQuality(
    Stack,
    assetId,
    quality,
  );
  return isImage;
};

getAssetBySize = async (assetId, resolution, size) => {
  const isImageResolution = await getAssetBySize(
    Stack,
    assetId,
    resolution,
    size,
  );
  return isImageResolution;
};

getAssetByFormat = async (assetId, format) => {
  const imageFormat = await getAssetByFormat(
    Stack,
    assetId,
    format,
  );
  return imageFormat;
};

getAssetByDimension = async (assetId, width, height) => {
  const imageDimension = await getAssetByDimension(
    Stack,
    assetId,
    width,
    height,
  );
  return imageDimension;
};

cropImageByDimension = async (assetId, width, height) => {
  const cropImage = await cropImageByDimension(
    Stack,
    assetId,
    width,
    height,
  );
  return cropImage;
};

cropImageOnlyByAspectRatio = async (assetId, ratio) => {
  const imageAspectRatio = await cropImageOnlyByAspectRatio(
    Stack,
    assetId,
    ratio,
  );
  return imageAspectRatio;
};

cropImageByAspectRatio = async (assetId, width, height, ratio) => {
  const imageAspectRatio = await cropImageByAspectRatio(
    Stack,
    assetId,
    width,
    height,
    ratio,
  );
  return imageAspectRatio;
};

cropImageBySubRegion = async (assetId, crop) => {
  const cropImage = await cropImageBySubRegion(
    Stack,
    assetId,
    crop,
  );
  return cropImage;
};

cropImageByOffset = async (assetId, crop) => {
  const cropImage = await cropImageByOffset(
    Stack,
    assetId,
    crop,
  );
  return cropImage;
};

cropImageInFailSafeMode = async (assetId, width, height, crop) => {
  const cropImage = await cropImageInFailSafeMode(
    Stack,
    assetId,
    width,
    height,
    crop,
  );
  return cropImage;
};

cropImageWithSmartCrop = async (assetId, width, height, crop) => {
  const cropImage = await cropImageWithSmartCrop(
    Stack,
    assetId,
    width,
    height,
    crop,
  );
  return cropImage;
};

imageFitMode = async (assetId, width, height, fitValue) => {
  const fitImage = await imageFitMode(
    Stack,
    assetId,
    width,
    height,
    fitValue,
  );
  return fitImage;
};

trimImage = async (assetId, trim) => {
  const trimImg = await trimImage(
    Stack,
    assetId,
    trim,
  );
  return trimImg;
};

orientImage = async (assetId, orient) => {
  const orientImg = await orientImage(
    Stack,
    assetId,
    orient,
  );
  return orientImg;
};

assetPadding = async (assetId, pad) => {
  const imgPadding = await assetPadding(
    Stack,
    assetId,
    pad,
  );
  return imgPadding;
};

assetPaddingWithBg = async (assetId, pad, color) => {
  const imgPaddingwithBg = await assetPaddingWithBg(
    Stack,
    assetId,
    pad,
    color,
  );
  return imgPaddingwithBg;
};

setAssetBg = async (assetId, color) => {
  const imgBg = await setAssetBg(
    Stack,
    assetId,
    color,
  );
  return imgBg;
};

setDevicePixelRatio = async (assetId, dpr, height, width) => {
  const dprRatio = await setDevicePixelRatio(
    Stack,
    assetId,
    dpr,
    height,
    width,
  );
  return dprRatio;
};

setimageBlurEffect = async (assetId, blur) => {
  const isblur = await setimageBlurEffect(
    Stack,
    assetId,
    blur,
  );
  return isblur;
};

fetchFirstFrame = async (assetId, frame) => {
  const isFrame = await fetchFirstFrame(
    Stack,
    assetId,
    frame,
  );
  return isFrame;
};

fetchSharpImage = async (assetId, sharp) => {
  const sharpImage = await fetchSharpImage(
    Stack,
    assetId,
    sharp,
  );
  return sharpImage;
};

assetSaturation = async (assetId, saturation) => {
  const saturatedImg = await assetSaturation(
    Stack,
    assetId,
    saturation,
  );
  return saturatedImg;
};

assetContrast = async (assetId, contrast) => {
  const constrastImg = await assetContrast(
    Stack,
    assetId,
    contrast,
  );
  return constrastImg;
};

assetbrightness = async (assetId, brightness) => {
  const constrastImg = await assetbrightness(
    Stack,
    assetId,
    brightness,
  );
  return constrastImg;
};

resizeAsset = async (assetId, width, height, filter) => {
  const constrastImg = await resizeAsset(
    Stack,
    assetId,
    width,
    height,
    filter,
  );
  return constrastImg;
};

canvasByWidthHeight = async (assetId, size) => {
  const canvasImg = await canvasByWidthHeight(
    Stack,
    assetId,
    size,
  );
  return canvasImg;
};

canvasSubRegion = async (assetId, region) => {
  const canvasImg = await canvasSubRegion(
    Stack,
    assetId,
    region,
  );
  return canvasImg;
};

canvasOffset = async (assetId, offset) => {
  const canvasImg = await canvasOffset(
    Stack,
    assetId,
    offset,
  );
  return canvasImg;
};

getAllEntries = async (contenttype) => {
  const isAllEntries = await getAllEntries(
    Stack,
    contenttype,
    this.locale,
  );
  return isAllEntries;
};

getEntryByUrl = async (contenttype, entryUrl) => {
  const isEntry = await getEntryByUrl(
    Stack,
    contenttype,
    entryUrl,
    this.locale,
  );
  return isEntry;
};

getEntryById = async (contenttype, entryUid) => {
  const isEntryHere = await getEntryById(
    Stack,
    contenttype,
    entryUid,
    this.locale,
  );
  return isEntryHere;
};

getEntryTitle = async (contenttype, entryUid) => {
  const isEntryTitleHere = await getEntryTitle(
    Stack,
    contenttype,
    entryUid,
    this.locale,
  );
  return isEntryTitleHere;
};

getAllEntrySection = async (contenttype, entryUid) => {
  const isEntryAllSectionHere = await getAllEntrySection(
    Stack,
    contenttype,
    entryUid,
    this.locale,
  );
  return isEntryAllSectionHere;
};

getEntryUrl = async (contenttype, entryUid) => {
  const isEntryUrl = await getEntryUrl(
    Stack,
    contenttype,
    entryUid,
    this.locale,
  );
  return isEntryUrl;
};

getSeo = async (contenttype, entryUid) => {
  const isSeoHere = await getSeo(
    Stack,
    contenttype,
    entryUid,
    this.locale,
  );
  return isSeoHere;
};

getPublishDetails = async (contenttype, entryUid) => {
  const isPubliedDetailHere = await getPublishDetails(
    Stack,
    contenttype,
    entryUid,
    this.locale,
  );
  return isPubliedDetailHere;
};

fetchOnly = async (contenttype, contentTypeParam) => {
  const isParamHere = await fetchOnly(
    Stack,
    contenttype,
    contentTypeParam,
    this.locale,
  );
  return isParamHere;
};

fetchExcept = async (contenttype, contentTypeParam) => {
  const isParamHere = await fetchExcept(
    Stack,
    contenttype,
    contentTypeParam,
    this.locale,
  );
  return isParamHere;
};

includeEmbeddedItems = async (contenttype, entryUid) => {
  const isIncludeEmbeddedItems = await includeEmbeddedItems(
    Stack,
    contenttype,
    entryUid,
    this.locale,
  );
  return isIncludeEmbeddedItems;
};

getEntryWithReference = async (entryUid, referenceFieldPath) => {
  const isgetEntryWithReferenceHere = await getEntryWithReference(
    Stack,
    entryUid,
    referenceFieldPath,
    this.locale,
  );
  return isgetEntryWithReferenceHere;
};

getEntryWithoutRef = async (entryUid, referenceFieldPath) => {
  const isgetEntryWithoutRefHere = await getEntryWithoutRef(
    Stack,
    entryUid,
    referenceFieldPath,
    this.locale,
  );
  return isgetEntryWithoutRefHere;
};

getSpecificEntryByUrlAndReference = async (entryUid, referenceFieldPath, entryUrl) => {
  const isgetSpecificEntryByUrlAndReference = await getSpecificEntryByUrlAndReference(
    Stack,
    entryUid,
    referenceFieldPath,
    entryUrl,
    this.locale,
  );
  return isgetSpecificEntryByUrlAndReference;
};

getEntrySpecificByUrlWithoutRef = async (entryUid, entryUrl) => {
  const isgetEntrySpecificByUrlWithoutRef = await getEntrySpecificByUrlWithoutRef(
    Stack,
    entryUid,
    entryUrl,
    this.locale,
  );
  return isgetEntrySpecificByUrlWithoutRef;
};

includeSchema = async (contenttype, entryUid) => {
  const isIncludeSchemaItems = await includeSchema(
    Stack,
    contenttype,
    entryUid,
    this.locale,
  );
  return isIncludeSchemaItems;
};

getContentByDate = async (contenttype, startDate, endDate) => {
  const isContentItems = await getContentByDate(
    Stack,
    contenttype,
    startDate,
    endDate,
  );
  return isContentItems;
};

getEntriesInAscending = async (contenttype, contentTypeParam) => {
  const isAscendingEntryItems = await getEntriesInAscending(
    Stack,
    contenttype,
    contentTypeParam,
    this.locale,
  );
  return isAscendingEntryItems;
};

getEntriesInDescending = async (contenttype, contentTypeParam) => {
  const isDescendingEntryItems = await getEntriesInDescending(
    Stack,
    contenttype,
    contentTypeParam,
    this.locale,
  );
  return isDescendingEntryItems;
};

searchByValue = async (contenttype, searchValue) => {
  const isSearchValue = await searchByValue(
    Stack,
    contenttype,
    searchValue,
  );
  return isSearchValue;
};

getLastEntries = async () => {
  const lastEntries = await getLastEntries(
    Stack,
  );
  return lastEntries;
};

setEntryLimit = async (contenttype, limit) => {
  const setLimit = await setEntryLimit(
    Stack,
    contenttype,
    limit,
    this.locale,
  );
  return setLimit;
};

skipEntries = async (contenttype, limit) => {
  const isSkipEntries = await skipEntries(
    Stack,
    contenttype,
    limit,
    this.locale,
  );
  return isSkipEntries;
};

getEntryByExistParam = async (contenttype, param) => {
  const isExist = await getEntryByExistParam(
    Stack,
    contenttype,
    param,
  );
  return isExist;
};

getEntryByNotExistParam = async (contenttype, param) => {
  const isNotExist = await getEntryByNotExistParam(
    Stack,
    contenttype,
    param,
  );
  return isNotExist;
};

entryValueContainedIn = async (contenttype, parameterType, param) => {
  const isParameter = await entryValueContainedIn(
    Stack,
    contenttype,
    parameterType,
    param,
  );
  return isParameter;
};

entryValueNotContainedIn = async (contenttype, parameterType, param) => {
  const isParameter = await entryValueNotContainedIn(
    Stack,
    contenttype,
    parameterType,
    param,
  );
  return isParameter;
};

getListOfContentType = async () => {
  const isList = await getListOfContentType(
    Stack,
  );
  return isList;
};

entriesNotEqualTo = async (contenttype, paramType, param) => {
  const isEntryAvailable = await entriesNotEqualTo(
    Stack,
    contenttype,
    paramType,
    param,
  );
  return isEntryAvailable;
};

setEntryPagination = async (contentType, skipFrom, limit) => {
  const entryPagination = await setEntryPagination(
    Stack,
    contentType,
    skipFrom,
    limit,
  );
  return entryPagination;
};

fetchQuery = async (contentType, query) => {
  const isQuery = await fetchQuery(
    Stack,
    contentType,
    query,
  );
  return isQuery;
};
}
