import React from "react";
import "./App.css";
import { DayPicker, RangePicker } from "@kristinavlasovets/date-picker-modsen";

function App() {
  return (
    <div className="App">
      <DayPicker
        defaultValue={new Date(2023, 5, 11)}
        minDate={new Date(2023, 5, 2)}
        maxDate={new Date(2023, 7, 23)}
        variant="month"
        beginningOfTheWeek="sunday"
        holidays={[
          { month: 12, day: 2 },
          { month: 12, day: 1 },
          { month: 10, day: 7 },
          { month: 8, day: 17 },
          { month: 6, day: 3 },
          { month: 4, day: 9 },
          { month: 4, day: 1 },
          { month: 3, day: 2 },
          { month: 2, day: 15 },
          { month: 2, day: 8 },
          { month: 1, day: 23 },
        ]}
        holidaycolor="#FFC0CB"
        textcolor="#333333"
        isClearButton={false}
        withoutTodo={false}
        withRange={false}
        onHandlerShowButton={() => ({})}
        onHandlerRangeDate={() => ({})}
      />
      <RangePicker
        minDate={new Date(2023, 5, 2)}
        maxDate={new Date(2023, 7, 23)}
        variant="month"
        beginningOfTheWeek="sunday"
        holidays={[
          { month: 12, day: 2 },
          { month: 12, day: 1 },
          { month: 10, day: 7 },
          { month: 8, day: 17 },
          { month: 6, day: 3 },
          { month: 4, day: 9 },
          { month: 4, day: 1 },
          { month: 3, day: 2 },
          { month: 2, day: 15 },
          { month: 2, day: 8 },
          { month: 1, day: 23 },
        ]}
        holidaycolor="#FFC0CB"
        textcolor="#333333"
        defaultStartDate={new Date(2023, 5, 20)}
        defaultEndDate={new Date(2023, 5, 28)}
      />
    </div>
  );
}

export default App;
