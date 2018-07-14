import { history } from '../services';
import config from '../../config.js';

export const SET_USER_CURRENT_INPUT = config.actionConst.SET_USER_CURRENT_INPUT;
export const SUBMIT_USER_INPUT = config.actionConst.SUBMIT_USER_INPUT;
export const NEW_LOG_ENTRY = config.actionConst.NEW_LOG_ENTRY;
export const SEND_COMMAND = config.actionConst.SEND_COMMAND;
export const INVALID_COMMAND = config.actionConst.INVALID_COMMAND;
export const NEW_USER = config.actionConst.NEW_USER;
export const UPDATE_LINK = config.actionConst.UPDATE_LINK;
export const SUBMIT_LINK = config.actionConst.SUBMIT_LINK;
export const MUSIC_DOWNLOAD = config.actionConst.MUSIC_DOWNLOAD;
export const MUSIC_FAIL = config.actionConst.MUSIC_FAIL;

function action(type, payload = {}) {
	return { type, ...payload };
}

// export const navigate = (pathname) => {
// 	history.push(pathname);
// 	return action(NAVIGATE, { pathname });
// };
//
// export const setMonthlyBill = (value) => action(SET_MONTHLY_BILL, { value });
// export const setUsage = (value) => action(SET_USAGE, { value });
// export const setAddress = (address) => action(SET_ADDRESS, { address });
// export const saveAddress = () => action(SAVE_ADDRESS);
// export const setMarker = (position) => action(SET_MARKER_POSITION, { position });
// export const startProject = () => action(START_PROJECT);
// export const resetDone = () => action(RESET_DONE);
// export const setPanels = (project, panelGroups) => action(SET_PANELS, { project, panelGroups });
// export const getRate = (state) => action(GET_RATE, { state });
// export const setAnalysis = (project) => action(SET_ANALYSIS, { project });
// export const exportResult = (rawData, image, state, usage, address, imgInfo, id) => action(EXPORT_RESULT, { rawData, image, state, usage, address, imgInfo, id });
// export const setPrice = (price) => action(SET_PRICE, { price });
// export const setRate = (value) => action(SET_RATE, { value });
// export const setLoadingResults = (value) => action(SET_LOADING_RESULTS, { value });
// export const setLoadingOffset = (value) => action(SET_LOADING_OFFSET, { value });
// export const loadOffset = (value) => action(LOAD_OFFSET, { value });
// export const setEnergyProduction = (energyProductionAc) => action(SET_ENERGY_PRODUCTION, { energyProductionAc });
// export const setInfo = (value) => action(SET_INFO, { value });
// export const setDrawing = (drawing) => action(SET_DRAWING, { drawing });
// export const setHelpToolbarDialogVisibility = (visible) => action(SET_DIALOG_VISIBILITY, { visible, dialogType:'HELP_TOOLBAR' });
// export const setHelpOptionDialogVisibility = (visible) => action(SET_DIALOG_VISIBILITY, { visible, dialogType:'HELP_OPTION' });
// export const setLeadFormDialogVisibility = (visible) => action(SET_DIALOG_VISIBILITY, { visible, dialogType:'LEAD_FORM' });
// export const getProject = (drawingId) => action(GET_PROJECT, { drawingId });
// export const setImage = (value) => action(SET_IMAGE, { value });
// export const setDrawId = (id) => action(SET_IMAGE, { id });
// export const openModal = () => action(OPEN_MODAL, {});
// export const closeModal = () => action(CLOSE_MODAL, {});
// export const login = (accessToken) => action(LOGIN, { accessToken });
// export const verifyEmail = (accessToken) => action(VERIFY_EMAIL, { accessToken });
// export const openMenu = () => action(OPEN_MENU, {});
// export const closeMenu = () => action(CLOSE_MENU, {});
// export const changeActiveComponent = (newActiveComponent) => action(CHANGE_ACTIVE_COMPONENT, { newActiveComponent });
// export const setUser = (user) => action(SET_USER, { user });
// export const getReferredUsers = (accessToken) => action(GET_REFERRED_USERS, { accessToken });
// export const setReferredUsers = (referredUsers) => action(SET_REFERRED_USERS, { referredUsers });
// export const addReferredUser = (referredUser) => action(ADD_REFERRED_USER, { referredUser });
// export const sendReferredUser = (accessToken, referredUser) => action(SEND_REFERRED_USER, { accessToken, referredUser });
// export const resetReferal = () => action(RESET_REFERAL, {});
// export const changeModalFirstname = (value) => action(CHANGE_MODAL_FIRST_NAME, { value });
// export const changeModalLastname = (value) => action(CHANGE_MODAL_LAST_NAME, { value });
// export const changeModalEmail = (value) => action(CHANGE_MODAL_EMAIL, { value });
// export const changeModalPhone = (value) => action(CHANGE_MODAL_PHONE, { value });
// export const updateUserInfo = (accessToken, updatedUserInfo) => action(UPDATE_USER_INFO, { accessToken, updatedUserInfo });
// export const logout = () => action(LOGOUT, {});
// export const changeFormIndex = (index) => action(CHANGE_FORM_INDEX, { index });
// export const changeLoanPostalCode = (postalCode) => action(CHANGE_LOAN_POSTAL_CODE, { postal_code:postalCode });
// export const changeLoanRegionCode = (regionCode) => action(CHANGE_LOAN_REGION_CODE, { region_code:regionCode });
// export const changeLoanLabel = (label) => action(CHANGE_LOAN_LABEL, { label });
// export const changeLoanCity = (city) => action(CHANGE_LOAN_CITY, { city });
// export const payReferer = (accessToken, information) => action(PAY_REFERER, { accessToken, information });
// export const submitLoanForm = (loanFormInfo) => action(SUBMIT_LOAN_FORM, { loanFormInfo });
// export const displayLoanDialog = () => action(DISPLAY_LOAN_DIALOG, {});
// export const hideLoanDialog = () => action(HIDE_LOAN_DIALOG, {});
// export const setReferredId = (referredId) => action(SET_REFERRED_ID, { referredId });
// export const sendLead = (lead) => action(SEND_LEAD, { lead });
// export const openUtilityModal = () => action(OPEN_UTILITY_MODAL, {});
// export const closeUtilityModal = () => action(CLOSE_UTILITY_MODAL, {});
// export const openSuccessUtilityModal = () => action(OPEN_SUCCESS_UTILITY_MODAL, {});
// export const closeSuccessUtilityModal = () => action(CLOSE_SUCCESS_UTILITY_MODAL, {});
// export const addAlert = (alert) => action(ADD_ALERT, { alert });
// export const removeAlert = () => action(REMOVE_ALERT, {});
// export const showAlert = () => action(SHOW_ALERT, {});
// export const hideAlert = () => action(HIDE_ALERT, {});
// export const formChange = (what, key, value) => action(FORM_CHANGE, { what, key, value });
// export const formReset = (what) => action(FORM_RESET, { what });
// export const displayLoanRatesTable = () => action(DISPLAY_LOAN_RATES_TABLE, {});
// export const hideLoanRatesTable = () => action(HIDE_LOAN_RATES_TABLE, {});
// export const uploadAvatar = (accessToken, file) => action(UPLOAD_AVATAR, { accessToken, file });
// export const openSuccessBanksModal = () => action(OPEN_SUCCESS_BANKS_MODAL, {});
// export const closeSuccessBanksModal = () => action(CLOSE_SUCCESS_BANKS_MODAL, {});
// export const openFailBanksModal = () => action(OPEN_FAIL_BANKS_MODAL, {});
// export const closeFailBanksModal = () => action(CLOSE_FAIL_BANKS_MODAL, {});
// export const openFormsBanksModal = () => action(OPEN_FORMS_BANKS_MODAL, {});
// export const closeFormsBanksModal = () => action(CLOSE_FORMS_BANKS_MODAL, {});
// export const sendBanks = (banksInfo) => action(SEND_BANKS, { banksInfo });
// export const submitLoan = (loanForm) => action(SUBMIT_LOAN_FORM, { loanForm });
// export const submitUtilityForm = (utilityInfo) => action(SUBMIT_UTILITY_FORM, { utilityInfo });
// export const getAllUsers = (accessToken) => action(GET_ALL_USERS, { accessToken });
// export const changeTargetUser = (auth0Id) => action(CHANGE_TARGET_USER, { auth0Id });
// export const getSpecificUser = (accessToken, targetAuth0UserId) => action(GET_SPECIFIC_USER, { accessToken, targetAuth0UserId });
// export const test = () => action(TEST, {});
export const setUserCurrentInput = (userCurrentInput) => action(SET_USER_CURRENT_INPUT, { userCurrentInput });
export const submitCurrentInput = (username, userCurrentInput) => action(SUBMIT_USER_INPUT, { username, userCurrentInput });
export const newLogEntry = (source, content, coloration) => action(NEW_LOG_ENTRY, {source, content, coloration});
export const sendCommand = (parsedCommand) => action(SEND_COMMAND, {parsedCommand, meta: {remote: true}});
export const invalidCommand = (parsedCommand) => action(INVALID_COMMAND, {parsedCommand});
export const setLink = (link) => action(UPDATE_LINK, {link});
export const sendLink = (link) => action(SUBMIT_LINK, {link, meta: {remote: true}})
