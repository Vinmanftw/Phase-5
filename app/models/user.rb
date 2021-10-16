class User < ApplicationRecord
    has_secure_password
    has_many :routines

    
    def monday
        self.routines.first.days.find_by(dotw: "Monday")
    end
    def tuesday
        self.routines.first.days.find_by(dotw: "Tuesday")
    end
    def wednesday
        self.routines.first.days.find_by(dotw: "Wednesday")
    end
    def thursday
        self.routines.first.days.find_by(dotw: "Thursday")
    end
    def friday
        self.routines.first.days.find_by(dotw: "Friday")
    end
    def saturday
        self.routines.first.days.find_by(dotw: "Saturday")
    end
    def sunday
        self.routines.first.days.find_by(dotw: "Sunday")
    end

end
