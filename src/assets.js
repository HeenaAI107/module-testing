// Get asset list
const getAssetsModule = async (contentDelivery, assetId = null) => {
  let result;
  const Query = assetId
    ? await contentDelivery.Assets(assetId).toJSON().fetch()
    : await contentDelivery.Assets().Query().toJSON().find();
  try {
    result = Query;
    return result;
  } catch (error) {
    console.log('error', error);
  }
  return result;
};

export { getAssetsModule };

// Get asset by quality
const getAssetByQuality = async (contentDelivery, assetId = null, quality = null) => {
  let result;
  // Only if assetId and quality is available
  if (assetId && quality) {
    let AssetQuality = `?quality=${quality}`;
    try {
      const Query = await contentDelivery.Assets(assetId).fetch();
      result = Query.get('url') + AssetQuality;
    } catch (error) {
      console.log('error', error);
    }
  } else {
    // display error when user miss out any parameter to pass
    result = 'AssetId and quality is required, please provide them';
  }
  return result;
};

export { getAssetByQuality };

// Get asset by Size
const getAssetBySize = async (contentDelivery, assetId = null, resolution = null, size = null) => {
  let result;
  // Only if assetId, resolution and size is available
  if (assetId && resolution && size) {
    let dimension = `?${resolution}=${size}`;
    try {
      const Query = await contentDelivery.Assets(assetId).fetch();
      result = Query.get('url') + dimension;
    } catch (error) {
      console.log('error', error);
    }
  } else {
    // display error when user miss out any parameter to pass
    result = 'Asset id, resolution and size is required, please provide them';
  }
  return result;
};

export { getAssetBySize };

// Get asset by Format
const getAssetByFormat = async (contentDelivery, assetId = null, format = null) => {
  let result;
  if (assetId && format) {
    let formatType = `?format=${format}`;
    try {
      const Query = await contentDelivery.Assets(assetId).fetch();
      result = Query.get('url') + formatType;
    } catch (error) {
      console.log('error', error);
    }
  } else {
    // display error when user miss out any parameter to pass
    result = 'Asset id and format is required, please provide them';
  }
  return result;
};

export { getAssetByFormat };

// Get asset by Multiple Parameter
const getAssetByDimension = async (contentDelivery, assetId = null, width = null, height = null) => {
  let result;
  if (assetId && width && height) {
    let dimension = `?width=${width}&height=${height}`;
    try {
      const Query = await contentDelivery.Assets(assetId).fetch();
      result = Query.get('url') + dimension;
    } catch (error) {
      console.log('error', error);
    }
  } else {
    // display error when user miss out any parameter to pass
    result = 'Asset id, width and height is required, please provide them';
  }
  return result;
};

export { getAssetByDimension };

// Crop image by width and height
const cropImageByDimension = async (contentDelivery, assetId = null, width = null, height = null) => {
  let result;
  if (assetId && width && height) {
    let dimension = `?crop=${width},${height}`;
    try {
      const Query = await contentDelivery.Assets(assetId).fetch();
      result = Query.get('url') + dimension;
    } catch (error) {
      console.log('error', error);
    }
  } else {
    // display error when user miss out any parameter to pass
    result = 'Asset id, width and height is required, please provide them';
  }
  return result;
};

export { cropImageByDimension };

// Crop image only by aspect ratio
const cropImageOnlyByAspectRatio = async (contentDelivery, assetId = null, ratio = null) => {
  let result;
  if (assetId && ratio) {
    let dimension = `?crop=${ratio}`;
    try {
      const Query = await contentDelivery.Assets(assetId).fetch();
      result = Query.get('url') + dimension;
    } catch (error) {
      console.log('error', error);
    }
  } else {
    // display error when user miss out any parameter to pass
    result = 'Asset id, and ratio is required, please provide them';
  }
  return result;
};

export { cropImageOnlyByAspectRatio };

// Crop image by width, height and aspect ratio
const cropImageByAspectRatio = async (contentDelivery, assetId = null, width = null, height = null, ratio = null) => {
  let result;
  if (assetId && width && height && ratio) {
    let dimension = `?width=${width}&height=${height}&crop=${ratio}`;
    try {
      const Query = await contentDelivery.Assets(assetId).fetch();
      result = Query.get('url') + dimension;
    } catch (error) {
      console.log('error', error);
    }
  } else {
    // display error when user miss out any parameter to pass
    result = 'Asset id, width, height and ratio is required, please provide them';
  }
  return result;
};

export { cropImageByAspectRatio };

// Crop image by sub region
const cropImageBySubRegion = async (contentDelivery, assetId = null, crop = null) => {
  let result;
  if (assetId && crop) {
    let dimension = `?crop=${crop}`;
    try {
      const Query = await contentDelivery.Assets(assetId).fetch();
      result = Query.get('url') + dimension;
    } catch (error) {
      console.log('error', error);
    }
  } else {
    // display error when user miss out any parameter to pass
    result = 'Asset id, and sub region is required, please provide them';
  }
  return result;
};

export { cropImageBySubRegion };

// Crop image by offset
const cropImageByOffset = async (contentDelivery, assetId = null, crop = null) => {
  let result;
  if (assetId && crop) {
    let dimension = `?crop=${crop}`;
    try {
      const Query = await contentDelivery.Assets(assetId).fetch();
      result = Query.get('url') + dimension;
    } catch (error) {
      console.log('error', error);
    }
  } else {
    // display error when user miss out any parameter to pass
    result = 'Asset id, and offset is required, please provide them';
  }
  return result;
};

export { cropImageByOffset };

// Crop image in fail and safe mode
const cropImageInFailSafeMode = async (contentDelivery, assetId = null, width = null, height = null, crop = null) => {
  let result;
  if (assetId && width && height && crop) {
    let dimension = `?width=${width}&height=${height}&crop=${crop}`;
    try {
      const Query = await contentDelivery.Assets(assetId).fetch();
      result = Query.get('url') + dimension;
    } catch (error) {
      console.log('error', error);
    }
  } else {
    // display error when user miss out any parameter to pass
    result = 'Asset id, width, height and offset is required, please provide them';
  }
  return result;
};

export { cropImageInFailSafeMode };

// Crop image with smart crop
const cropImageWithSmartCrop = async (contentDelivery, assetId = null, width = null, height = null, crop = null) => {
  let result;
  if (assetId && width && height && crop) {
    let dimension = `?width=${width}&height=${height}&crop=${crop}`;
    try {
      const Query = await contentDelivery.Assets(assetId).fetch();
      result = Query.get('url') + dimension;
    } catch (error) {
      console.log('error', error);
    }
  } else {
    // display error when user miss out any parameter to pass
    result = 'Asset id, width, height and offset is required, please provide them';
  }
  return result;
};

export { cropImageWithSmartCrop };

// Image fit mode
const imageFitMode = async (contentDelivery, assetId = null, width = null, height = null, fitvalue = null) => {
  let result;
  if (assetId && width && height && fitvalue) {
    let dimension = `?width=${width}&height=${height}&crop=${fitvalue}`;
    try {
      const Query = await contentDelivery.Assets(assetId).fetch();
      result = Query.get('url') + dimension;
    } catch (error) {
      console.log('error', error);
    }
  } else {
    // display error when user miss out any parameter to pass
    result = 'Asset id, width, height and fit mode is required, please provide them';
  }
  return result;
};

export { imageFitMode };

// Trim image from top,right,bottom,left
const trimImage = async (contentDelivery, assetId = null, trim = null) => {
  let result;
  if (assetId && trim) {
    let dimension = `?trim=${trim}`;
    try {
      const Query = await contentDelivery.Assets(assetId).fetch();
      result = Query.get('url') + dimension;
    } catch (error) {
      console.log('error', error);
    }
  } else {
    // display error when user miss out any parameter to pass
    result = 'Asset id and coordinates are required, please provide them';
  }
  return result;
};

export { trimImage };

// Image orientation
const orientImage = async (contentDelivery, assetId = null, orient = null) => {
  let result;
  if (assetId && orient) {
    let dimension = `?orient=${orient}`;
    try {
      const Query = await contentDelivery.Assets(assetId).fetch();
      result = Query.get('url') + dimension;
    } catch (error) {
      console.log('error', error);
    }
  } else {
    // display error when user miss out any parameter to pass
    result = 'Asset id and orient value is required, please provide them';
  }
  return result;
};

export { orientImage };

// Set padding to image
const assetPadding = async (contentDelivery, assetId = null, pad = null) => {
  let result;
  if (assetId && pad) {
    let dimension = `?pad=${pad}`;
    try {
      const Query = await contentDelivery.Assets(assetId).fetch();
      result = Query.get('url') + dimension;
    } catch (error) {
      console.log('error', error);
    }
  } else {
    // display error when user miss out any parameter to pass
    result = 'Asset id and padding value is required, please provide them';
  }
  return result;
};

export { assetPadding };

// Set padding and background to image
const assetPaddingWithBg = async (contentDelivery, assetId = null, pad = null, color = null) => {
  let result;
  if (assetId && pad && color) {
    let dimension = `?pad=${pad}&bg-color=${color}`;
    try {
      const Query = await contentDelivery.Assets(assetId).fetch();
      result = Query.get('url') + dimension;
    } catch (error) {
      console.log('error', error);
    }
  } else {
    // display error when user miss out any parameter to pass
    result = 'Asset id, padding value and background color is required, please provide them';
  }
  return result;
};

export { assetPaddingWithBg };

// Set background color to image
const setAssetBg = async (contentDelivery, assetId = null, color = null) => {
  let result;
  if (assetId && color) {
    let dimension = `?bg-color=${color}`;
    try {
      const Query = await contentDelivery.Assets(assetId).fetch();
      result = Query.get('url') + dimension;
    } catch (error) {
      console.log('error', error);
    }
  } else {
    // display error when user miss out any parameter to pass
    result = 'Asset id and color is required, please provide them';
  }
  return result;
};

export { setAssetBg };

// sets device pixel ratio
const setDevicePixelRatio = async (contentDelivery, assetId = null, dprValue = null, height = null, width = null) => {
  let result;
  if (assetId && dprValue && height && width) {
    let dimension = `?dpr=${dprValue}&height=${height}&width=${width}`;
    try {
      const Query = await contentDelivery.Assets(assetId).fetch();
      result = Query.get('url') + dimension;
    } catch (error) {
      console.log('error', error);
    }
  } else {
    // display error when user miss out any parameter to pass
    result = 'Asset id, device pixel ratio, height and width is required, please provide them';
  }
  return result;
};

export { setDevicePixelRatio };

// sets image blur effect
const setimageBlurEffect = async (contentDelivery, assetId = null, blur = null) => {
  let result;
  if (assetId && blur) {
    let dimension = `?blur=${blur}`;
    try {
      const Query = await contentDelivery.Assets(assetId).fetch();
      result = Query.get('url') + dimension;
    } catch (error) {
      console.log('error', error);
    }
  } else {
    // display error when user miss out any parameter to pass
    result = 'Asset id and blur value is required, please provide them';
  }
  return result;
};

export { setimageBlurEffect };

// Fetches first frame of gif
const fetchFirstFrame = async (contentDelivery, assetId = null, frame = null) => {
  let result;
  if (assetId && frame) {
    let dimension = `?frame=${frame}`;
    try {
      const Query = await contentDelivery.Assets(assetId).fetch();
      result = Query.get('url') + dimension;
    } catch (error) {
      console.log('error', error);
    }
  } else {
    // display error when user miss out any parameter to pass
    result = 'Asset id and frame value is required, please provide them';
  }
  return result;
};

export { fetchFirstFrame };

// Increase the sharpness of the image
const fetchSharpImage = async (contentDelivery, assetId = null, sharpValue = null) => {
  let result;
  if (assetId && sharpValue) {
    let dimension = `?sharpen=${sharpValue}`;
    try {
      const Query = await contentDelivery.Assets(assetId).fetch();
      result = Query.get('url') + dimension;
    } catch (error) {
      console.log('error', error);
    }
  } else {
    // display error when user miss out any parameter to pass
    result = 'Asset id and sharp value is required, please provide them';
  }
  return result;
};

export { fetchSharpImage };

// Asset Saturation
const assetSaturation = async (contentDelivery, assetId = null, saturation = null) => {
  let result;
  if (assetId && saturation) {
    let dimension = `?saturation=${saturation}`;
    try {
      const Query = await contentDelivery.Assets(assetId).fetch();
      result = Query.get('url') + dimension;
    } catch (error) {
      console.log('error', error);
    }
  } else {
    // display error when user miss out any parameter to pass
    result = 'Asset id and saturation value is required, please provide them';
  }
  return result;
};

export { assetSaturation };

// Asset Contrast
const assetContrast = async (contentDelivery, assetId = null, contrast = null) => {
  let result;
  if (assetId && contrast) {
    let dimension = `?contrast=${contrast}`;
    try {
      const Query = await contentDelivery.Assets(assetId).fetch();
      result = Query.get('url') + dimension;
    } catch (error) {
      console.log('error', error);
    }
  } else {
    // display error when user miss out any parameter to pass
    result = 'Asset id and contrast value is required, please provide them';
  }
  return result;
};

export { assetContrast };

// Asset brightness
const assetbrightness = async (contentDelivery, assetId = null, brightness = null) => {
  let result;
  if (assetId && brightness) {
    let dimension = `?brightness=${brightness}`;
    try {
      const Query = await contentDelivery.Assets(assetId).fetch();
      result = Query.get('url') + dimension;
    } catch (error) {
      console.log('error', error);
    }
  } else {
    // display error when user miss out any parameter to pass
    result = 'Asset id and brightness value is required, please provide them';
  }
  return result;
};

export { assetbrightness };

// Resize asset
const resizeAsset = async (contentDelivery, assetId = null, width = null, height = null, filterValue = null) => {
  let result;
  if (assetId && width && height && filterValue) {
    let dimension = `?width=${width}&height=${height}&resize-filter=${filterValue}`;
    try {
      const Query = await contentDelivery.Assets(assetId).fetch();
      result = Query.get('url') + dimension;
    } catch (error) {
      console.log('error', error);
    }
  } else {
    // display error when user miss out any parameter to pass
    result = 'Asset id, width, height and filter value is required, please provide them';
  }
  return result;
};

export { resizeAsset };

// Resize canvas
const canvasByWidthHeight = async (contentDelivery, assetId = null, size = null) => {
  let result;
  if (assetId && size) {
    let dimension = `?canvas=${size}`;
    try {
      const Query = await contentDelivery.Assets(assetId).fetch();
      result = Query.get('url') + dimension;
    } catch (error) {
      console.log('error', error);
    }
  } else {
    // display error when user miss out any parameter to pass
    result = 'Asset id and size is required, please provide them';
  }
  return result;
};

export { canvasByWidthHeight };

// Canvas subregion
const canvasSubRegion = async (contentDelivery, assetId = null, region = null) => {
  let result;
  if (assetId && region) {
    let dimension = `?canvas=${region}`;
    try {
      const Query = await contentDelivery.Assets(assetId).fetch();
      result = Query.get('url') + dimension;
    } catch (error) {
      console.log('error', error);
    }
  } else {
    // display error when user miss out any parameter to pass
    result = 'Asset id and region is required, please provide them';
  }
  return result;
};

export { canvasSubRegion };

// Canvas offset
const canvasOffset = async (contentDelivery, assetId = null, offset = null) => {
  let result;
  if (assetId && offset) {
    let dimension = `?canvas=${offset}`;
    try {
      const Query = await contentDelivery.Assets(assetId).fetch();
      result = Query.get('url') + dimension;
    } catch (error) {
      console.log('error', error);
    }
  } else {
    // display error when user miss out any parameter to pass
    result = 'Asset id and offset value is required, please provide them';
  }
  return result;
};

export { canvasOffset };
