export const fetchConsultations = () => {
  return [
    {
      id: 3,
      doctorName: "Jhon Snow",
      specialty: "Médico Generalista",
      dateTime: "01/01/2024 10:00",
      status: "Finalizada",
    },
    {
      id: 1,
      doctorName: "Lery Bird",
      specialty: "Cirurgia Facial",
      dateTime: "08/06/2024 08:00",
      status: "Pendente",
    },
    {
      id: 2,
      doctorName: "Tomas Muler",
      specialty: "Psicologia",
      dateTime: "11/07/2024 14:00",
      status: "Confrimada",
    },
  ];
};

export const fetchSchedules = () => {
  return [
    {
      doctorName: "Tomas Muler",
      schedules: [
        {
          id: 1,
          specialty: "Psicologia",
          date: "11/07/2024",
          availableHours: ["10:00", "10:30", "11:00", "11:30", "12:00"],
        },
        {
          id: 2,
          specialty: "Psiquiatria",
          date: "12/07/2024",
          availableHours: ["09:00", "09:30", "10:00", "10:30", "11:00"],
        },
        {
          id: 3,
          specialty: "Psicologia",
          date: "13/07/2024",
          availableHours: ["14:00", "14:30", "15:00", "15:30", "16:00"],
        },
        {
          id: 4,
          specialty: "Psiquiatria",
          date: "14/07/2024",
          availableHours: ["09:00", "09:30", "10:00", "10:30", "11:00"],
        },
      ],
    },
    {
      doctorName: "Ana Clara",
      schedules: [
        {
          id: 5,
          specialty: "Cardiologia",
          date: "15/07/2024",
          availableHours: ["08:00", "08:30", "09:00", "09:30", "10:00"],
        },
        {
          id: 6,
          specialty: "Endocrinologia",
          date: "16/07/2024",
          availableHours: ["13:00", "13:30", "14:00", "14:30", "15:00"],
        },
        {
          id: 7,
          specialty: "Cardiologia",
          date: "17/07/2024",
          availableHours: ["11:00", "11:30", "12:00", "12:30", "13:00"],
        },
        {
          id: 8,
          specialty: "Endocrinologia",
          date: "18/07/2024",
          availableHours: ["09:00", "09:30", "10:00", "10:30", "11:00"],
        },
      ],
    },
    {
      doctorName: "Lucas Andrade",
      schedules: [
        {
          id: 9,
          specialty: "Dermatologia",
          date: "19/07/2024",
          availableHours: ["15:00", "15:30", "16:00", "16:30", "17:00"],
        },
        {
          id: 10,
          specialty: "Pediatria",
          date: "20/07/2024",
          availableHours: ["08:00", "08:30", "09:00", "09:30", "10:00"],
        },
        {
          id: 11,
          specialty: "Dermatologia",
          date: "21/07/2024",
          availableHours: ["10:00", "10:30", "11:00", "11:30", "12:00"],
        },
        {
          id: 12,
          specialty: "Pediatria",
          date: "22/07/2024",
          availableHours: ["14:00", "14:30", "15:00", "15:30", "16:00"],
        },
      ],
    },
    {
      doctorName: "Mariana Silva",
      schedules: [
        {
          id: 13,
          specialty: "Neurologia",
          date: "23/07/2024",
          availableHours: ["13:00", "13:30", "14:00", "14:30", "15:00"],
        },
        {
          id: 14,
          specialty: "Geriatria",
          date: "24/07/2024",
          availableHours: ["08:00", "08:30", "09:00", "09:30", "10:00"],
        },
        {
          id: 15,
          specialty: "Neurologia",
          date: "25/07/2024",
          availableHours: ["09:00", "09:30", "10:00", "10:30", "11:00"],
        },
        {
          id: 16,
          specialty: "Geriatria",
          date: "26/07/2024",
          availableHours: ["11:00", "11:30", "12:00", "12:30", "13:00"],
        },
      ],
    },
    {
      doctorName: "Carlos Fernandes",
      schedules: [
        {
          id: 17,
          specialty: "Ortopedia",
          date: "27/07/2024",
          availableHours: ["10:00", "10:30", "11:00", "11:30", "12:00"],
        },
        {
          id: 18,
          specialty: "Fisioterapia",
          date: "28/07/2024",
          availableHours: ["09:00", "09:30", "10:00", "10:30", "11:00"],
        },
        {
          id: 19,
          specialty: "Ortopedia",
          date: "29/07/2024",
          availableHours: ["14:00", "14:30", "15:00", "15:30", "16:00"],
        },
        {
          id: 20,
          specialty: "Fisioterapia",
          date: "30/07/2024",
          availableHours: ["08:00", "08:30", "09:00", "09:30", "10:00"],
        },
      ],
    },
    {
      doctorName: "Beatriz Oliveira",
      schedules: [
        {
          id: 21,
          specialty: "Oncologia",
          date: "01/08/2024",
          availableHours: ["09:00", "09:30", "10:00", "10:30", "11:00"],
        },
        {
          id: 22,
          specialty: "Hematologia",
          date: "02/08/2024",
          availableHours: ["10:00", "10:30", "11:00", "11:30", "12:00"],
        },
        {
          id: 23,
          specialty: "Oncologia",
          date: "03/08/2024",
          availableHours: ["13:00", "13:30", "14:00", "14:30", "15:00"],
        },
        {
          id: 24,
          specialty: "Hematologia",
          date: "04/08/2024",
          availableHours: ["14:00", "14:30", "15:00", "15:30", "16:00"],
        },
      ],
    },
    {
      doctorName: "João Mendes",
      schedules: [
        {
          id: 25,
          specialty: "Gastroenterologia",
          date: "05/08/2024",
          availableHours: ["08:00", "08:30", "09:00", "09:30", "10:00"],
        },
        {
          id: 26,
          specialty: "Hepatologia",
          date: "06/08/2024",
          availableHours: ["09:00", "09:30", "10:00", "10:30", "11:00"],
        },
        {
          id: 27,
          specialty: "Gastroenterologia",
          date: "07/08/2024",
          availableHours: ["14:00", "14:30", "15:00", "15:30", "16:00"],
        },
        {
          id: 28,
          specialty: "Hepatologia",
          date: "08/08/2024",
          availableHours: ["10:00", "10:30", "11:00", "11:30", "12:00"],
        },
      ],
    },
  ];
};
