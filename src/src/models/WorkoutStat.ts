
export interface WorkoutStat {
  timestamp: string;     // ISO datetime, 
  rpm: number;           // pedal rotations per minute
  speed_kmh: number;     // speed in kilometers per hour
  power_watts: number;   // power output in watts
  distance_km: number;   // distance covered in kilometers
  calories: number;      // calories burned
}
