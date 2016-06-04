// action_types
export const PUSH = 'PUSH';
export const POP = 'POP';
export const NAVIGATE_TO = 'NAVIGATE_TO';

//action creators
export const navigateTo = (route) => {
  return {
    type: NAVIGATE_TO,
    route
  };
}

export const push = (route) => {
  return {
    type: PUSH,
    route
  };
}

export const pop = () => {
  return {
    type: POP
  };
}

const initialState = {
  routes: [],
  currentRoute: {
      name: 'route1'
  }
};

//reducer
export function navigationReducer(state= initialState, action){
  switch (action.type) {
    case NAVIGATE_TO:
    return {
      ...state,
      currentRoute: action.route
    };
    case PUSH:
    return {
      ...state,
      routes: [...routes, action.route],
      currentRoute: action.route
    };
    case POP:
    routes.pop();
    return {
      ...state,
      routes,
      currentRoute: routes[routes.length - 1]
    };
   default: return state;
  }
}
