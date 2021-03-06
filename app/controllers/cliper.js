import Cliper from '../services/cliper';

const all = async (ctx, next) => {
  const userId = ctx.session.userId;
  const loveQuery = ctx.request.query.love;
  const matchString = ctx.request.query.find;
  const query = loveQuery === 'true' ? {userId, love: true} : {userId};
  const clipers = await Cliper.getClipers(query, matchString);
  ctx.body = {
    data: clipers,
    success: true
  }
};

const getCliper = async (ctx, next) => {
  ctx.data = {
    data: {},
    success: true
  }
};

const add = async (ctx, next) => {
  const requestData = ctx.request.body;
  const cliper = requestData.cliper;
  const result = await Cliper.addCliper(cliper);
  ctx.body = {
    success: true,
    data: result
  };
};

const deleteCliper = async (ctx, next) => {
  const cliperId = ctx.params.id;
  const result = await Cliper.deleteCliper(cliperId);
  ctx.body = {
    data: result,
    success: true
  };
};

const updateCliper = async (ctx, next) => {
  const cliperId = ctx.params.id;
  const loveQuery = ctx.request.query.love;
  const love = loveQuery === 'true' ? true : false;
  const result = await Cliper.changeCliperLoveStatus(cliperId, love);
  ctx.body = {
    success: result
  };
};

export default {
  all,
  add,
  deleteCliper,
  getCliper,
  updateCliper
}
