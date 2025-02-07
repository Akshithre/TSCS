import { Globe, Activity, Users, Droplet, Lightbulb } from 'lucide-react';
import React from 'react';

export const sidebarConfig = [
  {
    name: 'TSCS Overview',
    icon: <Globe className="h-5 w-5 text-blue-600" />,
    link: '/overview',
    subItems: [
      { name: 'Board Members', link: '/overview/board-members' },
      { name: 'Organogram', link: '/overview/organogram' },
      { name: 'Medical Team', link: '/overview/medical-team' },
      { name: 'Research Advisory Team', link: '/overview/research-team' },
      { name: 'Ethical Committee', link: '/overview/ethical-committee' },
      { name: 'Auditors', link: '/overview/auditors' }
    ]
  },
  {
    name: 'Activities',
    icon: <Activity className="h-5 w-5 text-blue-600" />,
    link: '/activities',
    subItems: [
      { name: 'Diagnostic', link: '/activities/diagnostic' },
      { name: 'Transfusion', link: '/activities/transfusion' },
      { name: 'Blood Bank', link: '/activities/blood-bank' },
      { name: 'Research', link: '/activities/research' },
      { name: 'Advanced Diagnostic', link: '/activities/advanced-diagnostic' }
    ]
  },
  {
    name: 'Visitors',
    icon: <Users className="h-5 w-5 text-blue-600" />,
    link: '/visitors',
    subItems: [
      { name: 'National', link: '/visitors/national' },
      { name: 'International', link: '/visitors/international' }
    ]
  },
  {
    name: 'Blood Donation Camps',
    icon: <Droplet className="h-5 w-5 text-blue-600" />,
    link: '/blood-donation',
    subItems: [
      { name: 'Corporates', link: '/blood-donation/corporates' },
      { name: 'Colleges', link: '/blood-donation/colleges' },
      { name: 'Police Department', link: '/blood-donation/police' }
    ]
  },
  {
    name: 'Awareness Programs',
    icon: <Lightbulb className="h-5 w-5 text-blue-600" />,
    link: '/awareness',
    subItems: [
      { name: 'CMEs', link: '/awareness/cmes' },
      { name: 'National Conferences', link: '/awareness/conferences' },
      { name: 'Rallies', link: '/awareness/rallies' },
      { name: 'Bike Ride', link: '/awareness/bike-ride' }
    ]
  }
];