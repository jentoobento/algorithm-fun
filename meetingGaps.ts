/** 
Given a set of meetings and a start time and end time,
find if the user's day is fully booked or not. The function
should return true if there are any gaps between meetings
and should return false if the user is all booked.

Bonus: If there are one or more gaps between meetings,
return the start time and end time of the gap(s).

Example:
9am------------12pm-----------5pm
|[meeting---]                   |
|            [meeting-]         |
|                      [meeting]|
|-------------------------------|
This user is fully booked. There are consecutive meetings
between the given times.

9am------------12pm-----------5pm
|[meeting---]                   |
|       [meeting-------]        |
|              [meeting--]      |
|            [meeting----------]|
|-------------------------------|
This user is fully booked. There are consecutive and
overlapping meetings between the given times.

9am------------12pm-----------5pm
|[meeting--]                    |
|              [meeting--]      |
|                [meeting------]|
|-------------------------------|
This user is not fully booked. There is a gap between meetings.
*/

interface Meeting {
  id: number;
  startTime: number;
  endTime: number;
}

const isUserFullyBooked = (
  meetings: Meeting[],
  initialStartTime: number,
  initialEndTime: number,
) => {
  // Validate.
  if (initialStartTime < 0 || initialStartTime > 24 || initialEndTime < 0 || initialEndTime > 24) {
    console.log('One or more times is invalid. Times cannot be less than 0 or greater than 24.');
    return false;
  }
  
  if (initialEndTime < initialStartTime || initialStartTime > initialEndTime) {
    console.log('One or more times is invalid. Start time must be less than end time.');
    return false;
  }
  
  // Make sure the meetings are sorted by ascending start time.
  const sortedMeetings = meetings.sort((a, b) => a.startTime - b.startTime);
  
  const meetingGaps = [];
  let previousEndTime = initialStartTime;

  for (const meeting of sortedMeetings) {
    // If the current meeting overlaps with the previous meeting,
    // update the previousEndTime with the greater value.
    if (meeting.startTime <= previousEndTime) {
      previousEndTime = Math.max(previousEndTime, meeting.endTime);
    } else {
      // If there is a gap between the previous meeting and the current meeting,
      // add it to the meetingGaps array.
      meetingGaps.push({
        startTime: previousEndTime,
        endTime: meeting.startTime,
      });

      // Update the previousEndTime.
      previousEndTime = meeting.endTime;
    }
  };
  
  // If there is a gap between the last meeting and
  // the initialEndTime, add it to the meetingGaps array.
  if (previousEndTime < initialEndTime) {
    meetingGaps.push({
      startTime: previousEndTime,
      endTime: initialEndTime,
    });
  }

  // The user has gaps between meetings.
  if (meetingGaps.length) {
    let str = 'User has openings between ';
    meetingGaps.forEach((mtg, i) => {
      str += `${mtg.startTime} to ${mtg.endTime}`;
      if (i !== meetingGaps.length - 1) {
        str += ', ';
      } else {
        str += '.';
      }
    });

    console.log(str);
    return false;
  }

  // The user is fully booked.
  console.log(`User is fully booked between ${initialStartTime} and ${initialEndTime}.`);
  return true;
};

isUserFullyBooked(
  [
    {
      startTime: 9,
      endTime: 10,
      id: 1,
    },
    {
      startTime: 9,
      endTime: 11,
      id: 2,
    },
    {
      startTime: 13, // 1pm
      endTime: 15, // 3pm
      id: 3,
    },
  ],
  9,
  16, // 4pm       
);

isUserFullyBooked(
  [
    {
      startTime: 8,
      endTime: 10,
      id: 1,
    },
    {
      startTime: 9,
      endTime: 12,
      id: 2,
    },
    {
      startTime: 14, // 2pm
      endTime: 15, // 3pm
      id: 3,
    },
  ],
  9,
  16, // 4pm
);

isUserFullyBooked(
  [
    {
      startTime: 9,
      endTime: 10,
      id: 1,
    },
  ],
  9,
  9.5, // 9:30am
);

isUserFullyBooked(
  [
    {
      startTime: 10,
      endTime: 17, // 5pm
      id: 1,
    },
  ],
  10,
  25, // Invalid time. Time is > 24.
);

isUserFullyBooked(
  [
    {
      startTime: 10,
      endTime: 17, // 5pm
      id: 1,
    },
  ],
  10,
  9, // Invalid time. Time is less than start time.
);
