// Fetches all entries from stack
const getAllEntries = async (
  contentDelivery,
  contentType = null,
  languageType = null,
) => {
  let result;
  // Only if contentType is available
  if (contentType) {
    // Type conversion is required if user adds values other than string
    if (typeof contentType !== 'string') {
    // The values should be a string values
      contentType.toString();
    }

    const Query = await contentDelivery.ContentType(contentType).Query().language(languageType || 'en-us').toJSON()
      .find();

    result = Query;
  } else {
    // display error when user miss out any parameter to pass
    result = 'Content type is required, please provide content type';
  }
  return result;
};

export { getAllEntries };

// Fetch entry based in URL
const getEntryByUrl = async (
  contentDelivery,
  contentType = null,
  entryUrl = null,
  languageType = null,
) => {
  let result;
  // Only if contentType and entry url is available
  if (contentType && entryUrl) {
    const Query = await contentDelivery
      .ContentType(contentType).Query().toJSON()
      .where('url', `${entryUrl}`)
      .language(languageType || 'en-us')
      .find();

    result = Query;
  } else {
    // display error when user miss out any parameter to pass
    result = 'Both Content type and Entry Url is required, please provide them';
  }
  return result;
};

export { getEntryByUrl };

// Get Entry based on id
const getEntryById = async (
  contentDelivery,
  contentType = null,
  entryUid = null,
  languageType = null,
) => {
  let result;
  // Only if contentType and entryUid is available
  if (contentType && entryUid) {
    // Type conversion is required if user adds values other than string
    if (typeof contentType !== 'string' && typeof entryUid !== 'string') {
    // The values should be a string values
      contentType.toString();
      entryUid.toString();
    }
    const Query = await contentDelivery
      .ContentType(contentType)
      .Entry(entryUid)
      .toJSON()
      .language(languageType || 'en-us')
      .fetch();

    result = Query;
  } else {
    // display error when user miss out any parameter to pass
    result = 'Both Content type and Entry Uid is required, please provide them';
  }
  return result;
};

export { getEntryById };

// Fetch Entry Title
const getEntryTitle = async (
  contentDelivery,
  contentType = null,
  entryUid = null,
  languageType = null,
) => {
  let result;
  // contentType and entryUid is available
  if (contentType && entryUid) {
    // Type conversion is required if user adds values other than string
    if (typeof contentType !== 'string' && typeof entryUid !== 'string') {
    // The values should be a string values
      contentType.toString();
      entryUid.toString();
    }
    const Query = await contentDelivery
      .ContentType(contentType)
      .Entry(entryUid)
      .language(languageType || 'en-us')
      .fetch();

    result = Query.get('title');
  } else {
    // display error when user miss out any parameter to pass
    result = 'Content type and content type id is required, please provide both parameter';
  }
  return result;
};

export { getEntryTitle };

// Fetch all sections of an entry
const getAllEntrySection = async (
  contentDelivery,
  contentType = null,
  entryUid = null,
  languageType = null,
) => {
  let result;
  // contentType and entryUid is available
  if (contentType && entryUid) {
    // Type conversion is required if user adds values other than string
    if (typeof contentType !== 'string' && typeof entryUid !== 'string') {
    // The values should be a string values
      contentType.toString();
      entryUid.toString();
    }
    const Query = await contentDelivery
      .ContentType(contentType)
      .Entry(entryUid)
      .language(languageType || 'en-us')
      .fetch();

    result = Query.get('page_components');
  } else {
    // display error when user miss out any parameter to pass
    result = 'Content type and content type id is required, please provide both parameter';
  }
  return result;
};

export { getAllEntrySection };

// Fetch entry's URL
const getEntryUrl = async (
  contentDelivery,
  contentType = null,
  entryUid = null,
  languageType = null,
) => {
  let result;
  // contentType and entryUid is available
  if (contentType && entryUid) {
    // Type conversion is required if user adds values other than string
    if (typeof contentType !== 'string' && typeof entryUid !== 'string') {
    // The values should be a string values
      contentType.toString();
      entryUid.toString();
    }
    const Query = await contentDelivery
      .ContentType(contentType)
      .Entry(entryUid)
      .language(languageType || 'en-us')
      .fetch();
    result = Query.get('url');
  } else {
    // display error when user miss out any parameter to pass
    result = 'Content type and content type id is required, please provide both parameter';
  }
  return result;
};

export { getEntryUrl };

// Get entry's seo
const getSeo = async (
  contentDelivery,
  contentType = null,
  entryUid = null,
  languageType = null,
) => {
  let result;
  // contentType and entryUid is available
  if (contentType && entryUid) {
    // Type conversion is required if user adds values other than string
    if (typeof contentType !== 'string' && typeof entryUid !== 'string') {
    // The values should be a string values
      contentType.toString();
      entryUid.toString();
    }
    const Query = await contentDelivery
      .ContentType(contentType)
      .Entry(entryUid)
      .language(languageType || 'en-us')
      .fetch();

    result = Query.get('seo');
  } else {
    // display error when user miss out any parameter to pass
    result = 'Content type and content type id is required, please provide them';
  }
  return result;
};

export { getSeo };

// Get entry's published details
const getPublishDetails = async (
  contentDelivery,
  contentType = null,
  entryUid = null,
) => {
  let result;
  // contentType and entryUid is available
  if (contentType && entryUid) {
    // Type conversion is required if user adds values other than string
    if (typeof contentType !== 'string' && typeof entryUid !== 'string') {
    // The values should be a string values
      contentType.toString();
      entryUid.toString();
    }
    const Query = await contentDelivery
      .ContentType(contentType)
      .Entry(entryUid)
      .fetch();

    result = Query.get('publish_details');
  } else {
    // display error when user miss out any parameter to pass
    result = 'Content type and content type id is required, please provide both';
  }
  return result;
};

export { getPublishDetails };

// Fetch only those entry whose parameter matches
const fetchOnly = async (
  contentDelivery,
  contentType = null,
  contentTypeParam = null,
  languageType = null,
) => {
  let result;
  // when contentType and contenttype param is available
  if (contentType && contentTypeParam) {
    // Type conversion is required if user adds values other than string
    if (typeof contentType !== 'string' && typeof contentTypeParam !== 'string') {
      // The values should be a string values
      contentType.toString();
      contentTypeParam.toString();
    }
    const Query = await contentDelivery
      .ContentType(contentType)
      .Query().only(contentTypeParam).toJSON()
      .language(languageType || 'en-us')
      .find();

    result = Query;
  } else {
    // display error when user miss out any parameter to pass
    result = 'Content type and content type Parameter is required, please provide them';
  }
  return result;
};

export { fetchOnly };

// Fetch only those entry whose parameter do not match
const fetchExcept = async (
  contentDelivery,
  contentType = null,
  contentTypeParam = null,
  languageType = null,
) => {
  let result;
  // when contentType and contenttype param is available
  if (contentType && contentTypeParam) {
    // Type conversion is required if user adds values other than string
    if (typeof contentType !== 'string' && typeof contentTypeParam !== 'string') {
    // The values should be a string values
      contentType.toString();
      contentTypeParam.toString();
    }
    const Query = await contentDelivery
      .ContentType(contentType)
      .Query().except(contentTypeParam).toJSON()
      .language(languageType || 'en-us')
      .find();

    result = Query;
  } else {
    // display error when user miss out any parameter to pass
    result = 'Content type and content type Parameter is required, please provide them';
  }
  return result;
};

export { fetchExcept };

// Includes the embedded items of contenttype
const includeEmbeddedItems = async (
  contentDelivery,
  contentType = null,
  entryUid = null,
  languageType = null,
) => {
  let result;
  // contentType and entryUid is available
  if (contentType && entryUid) {
    // Type conversion is required if user adds values other than string
    if (typeof contentType !== 'string' && typeof entryUid !== 'string') {
      // The values should be a string values
      contentType.toString();
      entryUid.toString();
    }
    const Query = await contentDelivery
      .ContentType(contentType)
      .Entry(entryUid)
      .includeEmbeddedItems().toJSON()
      .language(languageType || 'en-us')
      .fetch();

    result = Query;
  } else {
    // display error when user miss out any parameter to pass
    result = 'Content type and content type id is required, please provide them';
  }
  return result;
};

export { includeEmbeddedItems };

// Fetch entry with provided reference
const getEntryWithReference = async (
  contentDelivery,
  entryUid = null,
  referenceFieldPath = null,
  languageType = null,
) => {
  let result;
  // when entryUid and referenceFieldPath is available
  if (entryUid && referenceFieldPath) {
    const Query = await contentDelivery
      .ContentType(entryUid).Query().includeReference(referenceFieldPath).includeOwner()
      .toJSON()
      .language(languageType || 'en-us')
      .find();

    result = Query;
  } else {
    // display error when user miss out any parameter to pass
    result = 'Content type id and reference field path is required, please provide them';
  }
  return result;
};

export { getEntryWithReference };

// Fetch entry without reference
const getEntryWithoutRef = async (
  contentDelivery,
  entryUid = null,
  languageType = null,
) => {
  let result;
  // when entryUid is available
  if (entryUid) {
    const Query = await contentDelivery
      .ContentType(entryUid).Query().includeReference().includeOwner()
      .toJSON()
      .language(languageType || 'en-us')
      .find();

    result = Query;
  } else {
    // display error when user miss out any parameter to pass
    result = 'Content type id is required, please provide it';
  }
  return result;
};

export { getEntryWithoutRef };

// Fetch the specific entry based on URL and reference
const getSpecificEntryByUrlAndReference = async (
  contentDelivery,
  entryUid = null,
  referenceFieldPath = null,
  entryUrl = null,
  languageType = null,
) => {
  let result;
  // when entryUid, referenceFieldPath and entryUrl is available
  if (entryUid && referenceFieldPath && entryUrl) {
    const Query = await contentDelivery
      .ContentType(entryUid).Query()
      .includeReference(referenceFieldPath).includeOwner()
      .toJSON()
      .where('url', `${entryUrl}`)
      .language(languageType || 'en-us')
      .find();

    result = Query;
  } else {
    // display error when user miss out any parameter to pass
    result = 'All three fields are required, please provide all';
  }
  return result;
};

export { getSpecificEntryByUrlAndReference };

// Fetch the specific entry based on URL and without reference
const getEntrySpecificByUrlWithoutRef = async (
  contentDelivery,
  entryUid = null,
  entryUrl = null,
  languageType = null,
) => {
  let result;
  // when entryUid and entryUrl is available
  if (entryUid && entryUrl) {
    const Query = await contentDelivery
      .ContentType(entryUid).Query().includeOwner()
      .or(contentDelivery.ContentType(entryUid).Query().where('url', `${entryUrl}`))
      .language(languageType || 'en-us')
      .toJSON()
      .find();
    result = Query;
  } else {
    // display error when user miss out any parameter to pass
    result = 'All fields are required, please provide all';
  }
  return result;
};

export { getEntrySpecificByUrlWithoutRef };

// Include the schema to an entry
const includeSchema = async (
  contentDelivery,
  contentType = null,
  entryUid = null,
  languageType = null,
) => {
  let result;
  // contentType and entryUid is available
  if (contentType && entryUid) {
    // Type conversion is required if user adds values other than string
    if (typeof contentType !== 'string' && typeof entryUid !== 'string') {
      // The values should be a string values
      contentType.toString();
      entryUid.toString();
    }
    const Query = await contentDelivery
      .ContentType(contentType)
      .Entry(entryUid)
      .includeSchema().toJSON()
      .language(languageType || 'en-us')
      .fetch();

    result = Query;
  } else {
    // display error when user miss out any parameter to pass
    result = 'Content type and content type id is required, please provide them';
  }
  return result;
};

export { includeSchema };

// Fetch entry in Ascending order
const getEntriesInAscending = async (
  contentDelivery,
  contentType = null,
  contentTypeParam = null,
  languageType = null,
) => {
  let result;
  // contentType and contentTypeParam is available
  if (contentType && contentTypeParam) {
    // Type conversion is required if user adds values other than string
    if (typeof contentType !== 'string' && typeof contentTypeParam !== 'string') {
      // The values should be a string values
      contentType.toString();
      contentTypeParam.toString();
    }
    const Query = await contentDelivery
      .ContentType(contentType)
      .Query().ascending(contentTypeParam)
      .toJSON()
      .language(languageType || 'en-us')
      .find();

    result = Query;
  } else {
    // display error when user miss out any parameter to pass
    result = 'Content type and content type parameter is required, please provide them';
  }
  return result;
};

export { getEntriesInAscending };

// Fetch entry in Descending order
const getEntriesInDescending = async (
  contentDelivery,
  contentType = null,
  contentTypeParam = null,
  languageType = null,
) => {
  let result;
  // contentType and contentTypeParam is available
  if (contentType && contentTypeParam) {
    // Type conversion is required if user adds values other than string
    if (typeof contentType !== 'string' && typeof contentTypeParam !== 'string') {
      // The values should be a string values
      contentType.toString();
      contentTypeParam.toString();
    }
    const Query = await contentDelivery
      .ContentType(contentType)
      .Query().descending(contentTypeParam)
      .toJSON()
      .language(languageType || 'en-us')
      .find();

    result = Query;
  } else {
    // display error when user miss out any parameter to pass
    result = 'Content type and content type parameter is required, please provide them';
  }
  return result;
};

export { getEntriesInDescending };

// Fetch the entry by searched value
const searchByValue = async (
  contentDelivery,
  contentType = null,
  searchValue = null,
) => {
  let result;
  // contentType and contentTypeParam is available
  if (contentType && searchValue) {
    // Type conversion is required if user adds values other than string
    if (typeof contentType !== 'string' && typeof searchValue !== 'string') {
      // The values should be a string values
      contentType.toString();
      searchValue.toString();
    }
    const Query = await contentDelivery
      .ContentType(contentType)
      .Query().search(searchValue).toJSON()
      .find();

    result = Query;
  } else {
    // display error when user miss out any parameter to pass
    result = 'Content type and search value parameter is required, please provide them';
  }
  return result;
};

export { searchByValue };

// Fetch the specific period of an entry between starting and ending date
const getContentByDate = async (
  contentDelivery,
  contentType = null,
  startDate = null,
  endDate = null,
) => {
  let result;
  // contentType and date is available
  if (contentType && startDate && endDate) {
    const Query = await contentDelivery
      .ContentType(contentType)
      .Query().greaterThan('created_at', startDate)
      .and(contentDelivery.ContentType(contentType).Query().lessThan('created_at', endDate))
      .toJSON()
      .find();

    result = Query;
  } else {
    // display error when user miss out any parameter to pass
    result = 'Content type and date is required, please provide them';
  }
  return result;
};

export { getContentByDate };

// Fetch the entry by latest update
const getLastEntries = async (
  contentDelivery,
) => {
  let result;
  const Query = await contentDelivery.getLastActivities();
  result = Query;
  return result;
};

export { getLastEntries };

// Fetch only the entries based on limit provided
const setEntryLimit = async (
  contentDelivery,
  contentType = null,
  setlimit = null,
  languageType = null,
) => {
  let result;
  // contentType and setLimit is available
  if (contentType && setlimit) {
    const Query = await contentDelivery
      .ContentType(contentType).Query().limit(setlimit).language(languageType || 'en-us')
      .toJSON()
      .find();

    result = Query;
  } else {
    // display error when user miss out any parameter to pass
    result = 'Content type and limit is required, please provide them';
  }
  return result;
};

export { setEntryLimit };

// Skips the entries
const skipEntries = async (
  contentDelivery,
  contentType = null,
  limit = null,
  languageType = null,
) => {
  let result;
  // contentType and limit is available
  if (contentType && limit) {
    const Query = await contentDelivery
      .ContentType(contentType).Query().skip(limit).toJSON()
      .language(languageType || 'en-us')
      .find();

    result = Query;
  } else {
    // display error when user miss out any parameter to pass
    result = 'Content type and limit is required, please provide them';
  }
  return result;
};

export { skipEntries };

// Fetches the entry by parameter which exists
const getEntryByExistParam = async (
  contentDelivery,
  contentType = null,
  param = null,
) => {
  let result;
  // contentType and param is available
  if (contentType && param) {
    const Query = await contentDelivery
      .ContentType(contentType).Query().exists(param).toJSON()
      .find();

    result = Query;
  } else {
    // display error when user miss out any parameter to pass
    result = 'Content type and param is required, please provide them';
  }
  return result;
};

export { getEntryByExistParam };

// Fetches the entry by parameter which do not exists
const getEntryByNotExistParam = async (
  contentDelivery,
  contentType = null,
  param = null,
) => {
  let result;
  // contentType and param is available
  if (contentType && param) {
    const Query = await contentDelivery
      .ContentType(contentType).Query().notExists(param).toJSON()
      .find();

    result = Query;
  } else {
    // display error when user miss out any parameter to pass
    result = 'Content type and param is required, please provide them';
  }
  return result;
};

export { getEntryByNotExistParam };

// Fetches the entry which contains the parameter
const entryValueContainedIn = async (
  contentDelivery,
  contentType = null,
  paramType = null,
  param = null,
) => {
  let result;
  // contentType, paramType and param is available
  if (contentType && paramType && param) {
    const Query = await contentDelivery
      .ContentType(contentType).Query().containedIn(paramType, param).toJSON()
      .find();

    result = Query;
  } else {
    // display error when user miss out any parameter to pass
    result = 'Content type, parameter type and param is required, please provide them';
  }
  return result;
};

export { entryValueContainedIn };

// Fetch only those entries which do not have the contains parameter
const entryValueNotContainedIn = async (
  contentDelivery,
  contentType = null,
  paramType = null,
  param = null,
) => {
  let result;
  // contentType, paramType and param is available
  if (contentType && paramType && param) {
    const Query = await contentDelivery
      .ContentType(contentType).Query().notContainedIn(paramType, param).toJSON()
      .find();

    result = Query;
  } else {
    // display error when user miss out any parameter to pass
    result = 'Content type, parameter type and param is required, please provide them';
  }
  return result;
};

export { entryValueNotContainedIn };

// Fetches the list of content type
const getListOfContentType = async (
  contentDelivery,
) => {
  let result;
  const Query = await contentDelivery.getContentTypes({ include_global_field_schema: true });
  result = Query;
  return result;
};

export { getListOfContentType };

// Fetch the entry whose parameter is not equal to given parameter
const entriesNotEqualTo = async (
  contentDelivery,
  contentType = null,
  paramType = null,
  param = null,
) => {
  let result;
  // contentType, paramType and param is available
  if (contentType && paramType && param) {
    const Query = await contentDelivery
      .ContentType(contentType).Query().notEqualTo(paramType, param).toJSON()
      .find();

    result = Query;
  } else {
    // display error when user miss out any parameter to pass
    result = 'Content type, paramType and param is required, please provide them';
  }
  return result;
};

export { entriesNotEqualTo };

// Set entries pagination
const setEntryPagination = async (contentDelivery, contentType, skipFrom = null, setlimit = null) => {
  let result;
  const data = contentDelivery.ContentType(contentType).Query().skip(skipFrom);
  let Query = data.limit(setlimit).toJSON().find();
  try {
    result = Query;
    return result;
  } catch (error) {
    console.log('error', error);
  }
  return result;
};

export { setEntryPagination };

// Set dynamic query
const fetchQuery = async (contentDelivery, contentType, query = null) => {
  let result;
  const data = contentDelivery.ContentType(contentType).Query();
  let Query = data.query(query).toJSON().find();
  try {
    result = Query;
    return result;
  } catch (error) {
    console.log('error', error);
  }
  return result;
};

export { fetchQuery };
