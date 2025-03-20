import { renderHook } from '@testing-library/react-hooks';
import { useDateInterval } from './useDateInterval';

const today = new Date('2023-10-10');

const edition = {
  tickets: {
    startDay: '2023-10-01',
    endDay: '2023-10-15',
  },
  cfp: {
    startDay: '2023-09-01',
    endDay: '2023-09-30',
  },
  sponsors: {
    startDate: '2023-10-05',
    endDate: '2023-10-20',
  },
};

describe('useDateInterval', () => {
  it('should return correct disabled states for tickets, cfp, and sponsors', () => {
    const { result } = renderHook(() => useDateInterval(today, edition));

    expect(result.current.isTicketsDisabled).toBe(false);
    expect(result.current.isCfpDisabled).toBe(true);
    expect(result.current.isSponsorDisabled).toBe(false);
  });
});
