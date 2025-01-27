// HOMEPAGE
export const HP_HOMEPAGE_OPENED = 'Homepage opened'; 
export const HP_HOMEPAGE_CLOSED = 'Homepage closed'; 
export const HP_HOW_IT_WORKS = 'How it works clicked'; 
export const HP_SLIDER_EXPANDED = 'Slider expanded'; // pass which slider was expanded
export const HP_THEAH_IN_ACTION_NEXT = 'Theah in action next'; 
export const HP_CONTACT_US_CLICKED = 'Contact us clicked'; 

// LOGIN PAGE
export const LI_LOGIN_PAGE_OPENED = 'Login page opened'; 
export const LI_FORM_SUBMITTED = 'Login form submitted'; // just pass email //done
export const LI_FORM_ERROR = 'Login form error'; 

// SIGNUP PAGE
export const SU_SIGNUP_PAGE_OPENED = 'Signup page opened'; 
export const SU_FORM_SUBMITTED = 'Signup page submitted'; // pass name, email and company
export const SU_FORM_ERROR = 'Signup form error'; 

// FORGOT PASSWORD PAGE
export const FP_FORGOT_PASSWORD_PAGE_OPENED = 'Forgot password page opened'; 
export const FP_FORM_SUBMITTED = 'Forgot password form submitted'; // pass email 

// SIDEBAR
export const SB_UPGRADE_TO_FULL_ACCESS_CLICKED =
  'Upgrade to full access clicked in sidebar';
export const SB_CONTACT_SALES_CLICKED = 'Contact sales clicked in sidebar'; 
export const SB_LOGOUT_CLICKED = 'Logout clicked in sidebar'; 

// DASHBOARD
export const DB_DELETE_BUTTON_CLICKED =
  'Delete button clicked on description card'; 
export const DB_DETAILS_BUTTON_CLICKED =
  'Details button clicked on description card';

// VIEW DESCRIPTION
export const VD_DESCRIPTION_OPENED = 'Description opened'; // pass description id
export const VD_CLOSE_BUTTON_CLICKED = 'View description close button clicked'; // pass description id
export const VD_COPY_BUTTON_CLICKED = 'View Description copy button clicked'; // pass description id
export const VD_SEND_EMAIL_CLICKED = 'View Description send email clicked'; // pass description id

// CREATE DESCRIPTION
export const CD_CREATE_DESCRIPTION_CLICKED =
  'Create new description button clicked';
export const CD_CLOSED = 'Create description page closed';
export const CD_SCREEN_NEXT_CLICKED = 'Create description screen next clicked'; // pass current screen name
export const CD_SCREEN_PREVIOUS_CLICKED =
  'Create description screen previous clicked'; // pass current screen name
export const CD_PHOTOS_UPLOADED = 'Create description photos uploaded'; // pass number of photos
export const CD_FORM_SUBMITTED = 'Create description form submitted';
export const CD_FORM_VALIDATION_ERROR =
  'Create description form validation error'; // pass error message same as toast.error
export const CD_FORM_SUCCESSFUL = 'Create description form successful'; // pass generation id
export const CD_FORM_RESPONSE_ERROR =
  'Create description error from edge function'; // pass error and generation id (if it is there)
export const CD_FORM_UNKNOWN_ERROR = 'Create description unknown error';

// FAQ PAGE
export const FQ_OPENED = 'FAQ page opened';
export const FQ_EXPANDED = 'FAQ expanded'; // pass faq which was expanded
export const FQ_COLLAPSED = 'FAQ collapsed'; // pass faq which was collapsed

// PROFILE SETTINGS
export const PS_OPENED = 'Profile settings page opened';
export const PS_PROFILE_CHANGED = 'Profile changed'; // call when profile form is submitted
export const PS_PASSWORD_CHANGED = 'Password changed';
