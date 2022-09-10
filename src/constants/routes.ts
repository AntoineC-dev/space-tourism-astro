import { generateUrl, Param, Route } from '$utils/navigation';

export const APP_ROUTES: App.Route<Route | 'home'>[] = [
  { name: 'home', href: '/' },
  { name: 'destination', href: generateUrl('destination', 'moon') },
  { name: 'crew', href: generateUrl('crew', 'douglas') },
  { name: 'technology', href: generateUrl('technology', 'launch_vehicle') },
];

export const DESTINATION_TABS: App.Route<Param<'destination'>>[] = [
  { name: 'moon', href: generateUrl('destination', 'moon') },
  { name: 'mars', href: generateUrl('destination', 'mars') },
  { name: 'europa', href: generateUrl('destination', 'europa') },
  { name: 'titan', href: generateUrl('destination', 'titan') },
];

export const CREW_TABS: App.Route<Param<'crew'>>[] = [
  { name: 'douglas', href: generateUrl('crew', 'douglas') },
  { name: 'mark', href: generateUrl('crew', 'mark') },
  { name: 'victor', href: generateUrl('crew', 'victor') },
  { name: 'anousheh', href: generateUrl('crew', 'anousheh') },
];
