import { PostActions, EnumPostAction } from '../actions/post.actions';
import { initialPostsState } from '../state/post.state';

export function postReducer(
    state = initialPostsState,
    action: PostActions
){
    switch (action.type) {
        case EnumPostAction.GetPostsSuccess: {
          return {
            ...state,
            posts: action.payload
          };
    }

    default:
        return state;
    }
};