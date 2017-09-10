angular
  .module("depoApp")
  .service("userService", function () {

    var _users = [];

    var getRandom = function (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function User(reportName, certNum, cName, depoLoc, depoDt, fName, fAddress, fPhone, fEmail, aName,
      aEmail, aPhone, speed, indexFor, condensedFor, fullFor, timeStamp,
      dVideo, dCD, dEmail, dPrint, orderAttorney, numCopies, specialIns, confid) {

      this.reporterName = reportName
      this.certNumber = certNum
      this.caseName = cName
      this.depoLocation = depoLoc
      this.depoDateTime = depoDt
      this.firmName = fName
      this.firmAddress = fAddress
      this.firmPhone = fPhone
      this.firmEmail = fEmail
      this.attorneyName = aName
      this.attorneyEmail = aEmail
      this.attorneyPhone = aPhone
      this.speed = speed
      this.index = indexFor
      this.condensed = condensedFor
      this.full = fullFor
      this.timeStamp = timeStamp
      this.video = dVideo
      this.CD = dCD
      this.email = dEmail
      this.print = dPrint
      this.orderingAttorney = orderAttorney
      this.numberCopies = numCopies
      this.specialInstruction = specialIns
      this.confidential = confid
      this.userId = getRandom(35, 100)
    }
    _users.unshift(new User('Kelly Woods', '238237237', 'Frank vs. State', 'Santa Ana', '12/14/2011',
      'Dale Law Group', '3746 3rd Street', '714-667-8373', 'dale@email.com', 'Bob Jones',
      'bob@email.com', '714-930-3223', 'Rush', 'Index', 'Condensed', 'Full', 'No', 'Video', 'CD', 'Email', 'Print',
      'Bob Jones', '2', 'Standing order - Full Index'))
    _users.unshift(new User('James Smith', '435237237', 'Stone vs. Brick', 'New York', 'Jan. 5, 1998',
      'Brooks, Daniels, and Loeb', '933 West Street', '539-323-7118', 'bdl@email.com', 'Stan Brooks',
      'stan@email.com', '467-323-2422', 'Normal', 'Index', 'Condensed', 'Full', 'No', 'Video', 'CD', 'Email', 'Print',
      'Stan Brooks', '0', ''))
    _users.unshift(new User('Robin Lee', '4783823242', 'Simpson vs. Springfield', 'Springfield', '09/17/2016',
      'Moe Law Group', '4783 Evergreen Terrance', '643-574-4544', 'moe@email.com', 'Monty Burns',
      'burns@email.com', '478-732-0987', 'Normal', 'Index', 'Condensed', 'Full', 'No', 'Video', 'CD', 'Email', 'Print',
      'Monty Burns', '8', 'Payment Due on Delivery'))
    _users.unshift(new User('Pam Beasley', '34378934', 'Michael Scott Paper Company vs. Dunder-Mifflin', 'Scranton', 'June, 11, 2005',
      'Creed Law Group', '34837 Main Street', '474-534-2322', 'creed@email.com', 'Kelly Kapoor',
      'kelly@email.com', '938-262-3434', 'Expedited', 'Index', 'Condensed', 'Full', 'Yes', 'Video', 'CD', 'Email', 'Print',
      'Kelly Kapoor', '15', 'Do not send zipfiles'))
    _users.unshift(new User('Meredith Palmer', '90832323', 'Michael Scott Paper Company vs. Dunder-Mifflin', 'Scranton', '9/25/2006',
      'Vance, Schrute, and Martin', '3893 Nest Ave', '833-372-2382', 'vam@email.com', 'Andy Bernard',
      'andy@email.com', '872-234-2322', 'Rush', 'Index', 'Condensed', 'Full', 'No', 'Video', 'CD', 'Email', 'Print',
      'Andy Bernard', '9', ''))
    _users.unshift(new User('Kevin Malone', '375232424', 'Michael Scott Paper Company vs. Dunder-Mifflin', 'Scranton', '2/5/2007',
      'Creed Law Group', '34837 Main Street', '474-534-2322', 'creed@email.com', 'Darryl Philbin',
      'darryl@email.com', '476-199-3231', 'Normal', 'Index', 'Condensed', 'Full', 'Yes', 'Video', 'CD', 'Email', 'Print',
      'Darryl Philbin', '21', 'Standing Order - Full, Condensed'))
    _users.unshift(new User('Nancy Drew', '9347324', 'Bookstore vs. Movie Production', 'Los Angeles', 'March, 23, 1982',
      'Fiction Law Group', '398 12th Ave', '213-543-2332', 'fiction@email.com', 'Frank Hardy',
      'frank@email.com', '832-101-7422', 'Normal', 'Index', 'Condensed', 'Full', 'No', 'Video', 'CD', 'Email', 'Print',
      'Frank Hardy', '0', 'Standing Order - Full, Condensed, Index'))
    _users.unshift(new User('Eleven', '11', 'Upside Down vs. Hawkins National Laboratory', 'Hawkins', '5/12/1983',
      'Mike, Lucas, and Dustin', '992 Main Street', '847-101-3822', 'mld@email.com', 'Will Byers',
      'will@email.com', '238-232-1911', 'Expedited', 'Index', 'Condensed', 'Full', 'No', 'Video', 'CD', 'Email', 'Print',
      'Will Byers', '-100', 'Standing Order - Full, Condensed, Index', 'Confidential!'))

    this.getUsers = function () {
      return _users

    }

    this.addUser = function (reportName, certNum, cName, depoLoc, depoDt, fName, fAddress, fPhone, fEmail, aName,
      aEmail, aPhone, speed, indexFor, condensedFor, fullFor, timeStamp,
      dVideo, dCD, dEmail, dPrint, orderAttorney, numCopies, specialIns, confid) {

      _users.unshift(new User(reportName, certNum, cName, depoLoc, depoDt, fName, fAddress, fPhone, fEmail, aName,
        aEmail, aPhone, speed, indexFor, condensedFor, fullFor, timeStamp,
        dVideo, dCD, dEmail, dPrint, orderAttorney, numCopies, specialIns, confid))
    }

  })