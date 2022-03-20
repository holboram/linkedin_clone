import { displaySuggestions } from './displaySuggestions.js';
import { displayFeeds } from './displayFeeds.js';
import { displayUserData } from './common/displayUserData.js';
import { showDropDownFilter } from './showDropDownFilter.js';
import { showMoreContent } from './showMoreContent.js';
import { showInfo } from './showInfo.js';
import { startPost } from './startPost.js';

// User data
displayUserData();

// Modal post
startPost();

// Feeds list
displayFeeds();

// Populate feed suggestions
displaySuggestions();

// Dropdown filter feed
showDropDownFilter();

// Show more info button
showMoreContent();

// Display info feed suggestions
showInfo();
