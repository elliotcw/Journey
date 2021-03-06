'use strict';

angular.module('journey.services', [])
  .service('journeyService', function ($http) {

    this.getJourneyInfo = function (journeyOptions) {

      var params = {
        'language': 'en',
        'sessionID': 0,
        'place_origin': 'London',
        'type_origin': 'stop',
        'name_origin': journeyOptions.origin,
        'place_destination': 'London',
        'type_destination': 'stop',
        'name_destination': journeyOptions.destination,
        'itdDate': journeyOptions.day,
        'itdTime': journeyOptions.by
      };

      return $http.get('/api/XML_TRIP_REQUEST2', {params: params});
    };

    this.getTubeStations = function () {
      return _.map([
        'Acton Central',
        'Acton Town',
        'Aldgate',
        'Aldgate East',
        'All Saints',
        'Alperton',
        'Amersham',
        'Angel',
        'Archway',
        'Arnos Grove',
        'Arsenal',
        'Baker Street',
        'Balham',
        'Bank',
        'Barbican',
        'Barking',
        'Barkingside',
        'Barons Court',
        'Bayswater',
        'Beckton',
        'Beckton Park',
        'Becontree',
        'Belsize Park',
        'Bermondsey',
        'Bethnal Green',
        'Blackfriars',
        'Blackhorse Road',
        'Blackwall',
        'Bond Street',
        'Borough Station',
        'Boston Manor',
        'Bounds Green',
        'Bow Church',
        'Bow Road',
        'Brent Cross',
        'Brixton',
        'Bromley-by-Bow',
        'Brondesbury',
        'Brondesbury Park',
        'Buckhurst Hill',
        'Burnt Oak',
        'Caledonian Road',
        'Caledonian Road & Barnsbury',
        'Camden Road',
        'Camden Town',
        'Canada Water',
        'Canary Wharf',
        'Canning Town',
        'Cannon Street',
        'Canonbury',
        'Canons Park',
        'Chalfont & Latimer',
        'Chalk Farm',
        'Chancery Lane',
        'Charing Cross',
        'Chesham',
        'Chigwell',
        'Chiswick Park',
        'Chorleywood',
        'Clapham Common',
        'Clapham North',
        'Clapham South',
        'Cockfosters?',
        'Colindale',
        'Colliers Wood',
        'Covent Garden',
        'Crossharbour And London Arena',
        'Croxley',
        'Custom House for ExCel',
        'Cutty Sark',
        'Cyprus',
        'Dagenham East',
        'Dagenham Heathway',
        'Dalston Kingsland',
        'Debden',
        'Debtford Bridge',
        'Devons Road',
        'Dollis Hill',
        'Ealing Broadway',
        'Ealing Common',
        'Earls Court',
        'East Acton',
        'East Finchley',
        'East Ham',
        'East India',
        'East Putney',
        'Eastcote',
        'Edgware',
        'Edgware Road',
        'Elephant And Castle',
        'Elm Park',
        'Elverson Road',
        'Embankment',
        'Epping',
        'Euston',
        'Euston Square',
        'Fairlop',
        'Farringdon',
        'Finchley',
        'Finchley Road',
        'Finchley Road And Frognal',
        'Finsbury Park',
        'Fulham Broadway',
        'Gallions Reach',
        'Gants Hill',
        'Gloucester Road?',
        'Golders Green',
        'Goldhawk Road',
        'Goodge Street',
        'Gospel Oak',
        'Grange Hill',
        'Great Portland Street',
        'Green Park',
        'Greenford',
        'Greenwich',
        'Gunnersbury',
        'Hackney Central',
        'Hackney Wick',
        'Hainault',
        'Hammersmith',
        'Hampstead Heath',
        'Hampstead',
        'Hanger Lane',
        'Harlesden',
        'Harrow And Wealdstone',
        'Harrow on-the-Hill',
        'Hatton Cross',
        'Heathrow Terminal 4',
        'Heathrow Terminals 1,2,3',
        'Hendon Central',
        'Heron Quays',
        'High Barnet',
        'High Street Kensington',
        'Highbury & Islington',
        'Highgate',
        'Hillingdon',
        'Holborn',
        'Holland Park',
        'Holloway Road',
        'Homerton',
        'Hornchurch',
        'Hounslow Central',
        'Hounslow East',
        'Hounslow West',
        'Hyde Park Corner',
        'Ickenham',
        'Island Gardens',
        'Kennington',
        'Kensal Green',
        'Kensal Rise',
        'Kensington (Olympia)',
        'Kentish Town',
        'Kentish Town West',
        'Kenton',
        'Kew Gardens',
        'Kilburn',
        'Kilburn Park',
        'King\'s Cross St Pancras',
        'Kingsbury ',
        'Knightsbridge ',
        'Ladbroke Grove ',
        'Lambeth North ? ',
        'Lancaster Gate ',
        'Latimer Road ',
        'Leicester Square ',
        'Lewisham ',
        'Leyton ',
        'Leytonstone ',
        'Limehouse ',
        'Liverpool Street ',
        'London Bridge ',
        'Loughton ',
        'Manor House ',
        'Mansion House ',
        'Marble Arch ',
        'Marylebone ',
        'Maida Vale ? ',
        'Mile End ',
        'Mill Hill East ',
        'Monument ',
        'Moor Park ',
        'Moorgate ',
        'Morden ',
        'Mornington Crescent ',
        'Mudchute ',
        'Neasden ',
        'New Cross Gate ',
        'New Cross ',
        'Newbury Park ',
        'North Acton ',
        'North Ealing ',
        'North Greenwich ',
        'North Harrow ',
        'North Wembley ',
        'North Woolwich ',
        'Northfields ',
        'Northolt ',
        'Northwick Park ',
        'Northwood ',
        'Northwood Hills ',
        'Notting Hill Gate ',
        'Oakwood ',
        'Old Street ',
        'Osterley ',
        'Oval',
        'Oxford Circus ',
        'Paddington ',
        'Park Royal ',
        'Parsons Green ',
        'Perivale ',
        'Picadilly Circus ',
        'Pimlico ',
        'Pinner ',
        'Plaistow ',
        'Poplar ',
        'Preston Road ',
        'Prince Regent ',
        'Pudding Mill Lane ',
        'Putney Bridge ',
        'Queens Park ',
        'Queensbury ',
        'Queensway ',
        'Ravenscourt Park ',
        'Rayners Lane ',
        'Redbridge ',
        'Regent\'s Park',
        'Richmond',
        'Rickmansworth',
        'Roding Valley',
        'Rotherhithe',
        'Royal Albert',
        'Royal Oak',
        'Royal Victoria',
        'Ruislip',
        'Ruislip Gardens',
        'Ruislip Manor',
        'Russel Square',
        'Seven Sisters',
        'Shadwell',
        'Shepherd\'s Bush ? ',
        'Shoreditch ',
        'Silvertown ',
        'Sloane Square ',
        'Snaresbrook ',
        'South Acton ',
        'South Ealing ',
        'South Harrow ',
        'South Kensington ',
        'South Kenton ',
        'South Quay ',
        'South Ruislip ',
        'South Wimbledon ? ',
        'South Woodford ',
        'Southfields ',
        'Southgate ',
        'Southwark ',
        'St.James\'s Park',
        'St John\'s Wood',
        'St Paul\'s',
        'Stamford Brook',
        'Stanmore',
        'Stepney Green',
        'Stockwell',
        'Stonebridge Park',
        'Stratford',
        'Sudbury Hill',
        'Sudbury Town',
        'Surrey Quays',
        'Swiss Cottage',
        'Temple',
        'Theydon Bois',
        'Tooting Bec',
        'Tooting Broadway',
        'Tottenham Court Road',
        'Tottenham Hale',
        'Totteridge And Whetstone',
        'Tower Gateway',
        'Tower Hill',
        'Tufnell Park',
        'Turnham Green',
        'Turnpike Lane',
        'Upminster',
        'Upminster Bridge',
        'Upney',
        'Upton Park',
        'Uxbridge',
        'Vauxhall',
        'Victoria',
        'Walthamstow Central',
        'Wanstead',
        'Wapping',
        'Warren Street',
        'Warwick Avenue',
        'Waterloo',
        'Watford',
        'Wembley Central',
        'Wembley Park',
        'West Acton',
        'West Brompton',
        'West Finchley',
        'West Ham',
        'West Hampstead',
        'West Harrow',
        'West India Quay',
        'West Kensington?',
        'West Ruislip',
        'Westbourne Park',
        'Westferry',
        'Westminster',
        'White City',
        'Whitechapel',
        'Willesden Green',
        'Willesden Junction',
        'Wimbledon?',
        'Wimbledon Park',
        'Wood Green',
        'Woodford',
        'Woodside Park'
      ], function (station) {
        return {
          name: station
        };
      });
    };
  });
