export const formatDate = createdAt => {
    if (createdAt) {
      const createdAtDate = new Date(createdAt.seconds * 1000 + createdAt.nanoseconds / 1000000);
      const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ];
      const year = createdAtDate.getFullYear();
      const month = months[createdAtDate.getMonth()];
      const day = createdAtDate.getDate();
      return `${month} ${day}, ${year}`;
    } else {
      return '';
    }
  };