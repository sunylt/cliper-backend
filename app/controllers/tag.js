import Tag from '../services/tag';

const newTag = async (ctx, next) => {
  const requestData = ctx.request.body;
  const pageUrl = requestData.pageUrl;
  const userId = ctx.session.userId;
  const content = requestData.content;
  const tagObj = {
    userId,
    pageUrl,
    content
  };
  const result = await Tag.addTag(tagObj);
  ctx.body = {
    data: result,
    success: true
  };
};

const getTags = async (ctx, next) => {
  const pageUrl = ctx.request.query.pageUrl
  const userId = ctx.session.userId;
  let tags = await Tag.getTags(pageUrl, userId);
  ctx.body = {
    success: true,
    data: tags
  };
};

const deleteTag = async (ctx, next) => {
  const tagId = ctx.params.id;
  const result = await Tag.deleteTag(tagId);
  ctx.body = {
    data: result,
    success: true
  };
};

export default {
  newTag,
  getTags,
  deleteTag
}
