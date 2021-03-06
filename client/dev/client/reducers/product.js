import * as actions from '../actions/action-types.js'

const defaultDropDownsProduct = {
    id: '',
    weight: '',
    modelNumber: '',
    brand: '',
    price: '',
    electronicType: 'TelevisionSet',
    processor: '',
    ram: '',
    hardDrive: '',
    cpus: '',
    os: '',
    dimensions: '',
    type: '',
    displaySize: '',
    battery: '',
    camera: '',
    touchScreen: '',
    size: ''
};

const initialState = {
    isFetching: false,
    filterSet: false,
    error: "",
    productFilter: "",
    products: [],
    productViewOpen: false,
    productDeleteOpen: false,
    addProduct: {
        addingProduct: false,
        addProductOpen: false,
        error: false
    },
    modifyProduct: {
        modifyingProduct: false,
        modifyProductOpen: false,
        error: false
    },
    dropDownsProduct: defaultDropDownsProduct,
    selectedProduct: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case actions.SET_PRODUCTS_FILTER:
            return {
                ...state,
                productFilter: action.productFilter,
                filterSet: true
            };
            break;
        case actions.GET_PRODUCTS_REQUEST:
            return {
                ...state,
                isFetching: true
            };
            break;
        case actions.GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.products,
                isFetching: false,
                filterSet: false
            };
            break;
        case actions.GET_PRODUCTS_FAILURE:
            return {
                ...state,
                error: action.error,
                isFetching: false,
                filterSet: false
            };
            break;
        case actions.SHOW_PRODUCT_VIEW_DIALOG:
            return { ...state, productViewOpen: true, selectedProduct: action.product };
            break;
        case actions.HIDE_PRODUCT_VIEW_DIALOG:
            return { ...state, productViewOpen: false };
            break;
        case actions.SHOW_DELETE_PRODUCT_DIALOG:
            return { ...state, productDeleteOpen: true, selectedProduct: action.product };
            break;
        case actions.HIDE_DELETE_PRODUCT_DIALOG:
            return { ...state, productDeleteOpen: false };
            break;
        case actions.SHOW_ADD_PRODUCT_DIALOG:
            return { 
                ...state,
                addProduct: {
                    ...state.addProduct,
                    addProductOpen: true 
                },
                dropDownsProduct: defaultDropDownsProduct
            };
            break;
        case actions.HIDE_ADD_PRODUCT_DIALOG:
            return { 
                ...state,
                addProduct: {
                    ...state.addProduct,
                    addProductOpen: false
                }
            };
            break;
        case actions.ADD_PRODUCT_REQUEST:
            return {
                ...state,
                addProduct: {
                    ...state.addProduct,
                    addingProduct: true,
                    error: false
                }
            };
            break;
        case actions.ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                addProduct: {
                    ...state.addProduct,
                    error: false,
                    addingProduct: false
                }
            };
            break;
        case actions.ADD_PRODUCT_FAILURE:
            return {
                ...state,
                addProduct: {
                    ...state.addProduct,
                    error: true,
                    addingProduct: false
                }
            };
            break;
        case actions.SHOW_MODIFY_PRODUCT_DIALOG:
            return {
                ...state,
                modifyProduct: {
                    ...state.modifyProduct,
                    modifyProductOpen: true
                },
                dropDownsProduct: {
                    ...defaultDropDownsProduct,
                    ...action.product
                },
                productViewOpen: false
            };
            break;
        case actions.HIDE_MODIFY_PRODUCT_DIALOG:
            return {
                ...state,
                modifyProduct: {
                    ...state.modifyProduct,
                    modifyProductOpen: false
                }
            };
            break;
        case actions.MODIFY_PRODUCT_REQUEST:
            return {
                ...state,
                modifyProduct: {
                    ...state.modifyProduct,
                    modifyingProduct: true,
                    error: false
                }
            };
            break;
        case actions.MODIFY_PRODUCT_SUCCESS:
            return {
                ...state,
                modifyProduct: {
                    ...state.modifyProduct,
                    modifyingProduct: false,
                    error: false
                }
            };
            break;
        case actions.MODIFY_PRODUCT_FAILURE:
            return {
                ...state,
                modifyProduct: {
                    ...state.modifyProduct,
                    modifyingProduct: false,
                    error: true
                }
            }
            break;
        default:
            return state;
    }
}