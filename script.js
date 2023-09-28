
    // Function to print the content of the modal
    function printModalContent() {
      const printContent = document.getElementById('consultationDetailsModal');
      const printWindow = window.open('', '', 'width=800, height=600');
      printWindow.document.write('<html><head><title>Consultation Details</title></head><body>');
      printWindow.document.write(printContent.innerHTML);
      printWindow.document.write('</body></html>');
      printWindow.document.close();
      printWindow.print();
    }
  
    // Function to populate the modal with form details
    document.getElementById('consultationForm').addEventListener('submit', function (event) {
      event.preventDefault();
      const modalPatientName = document.getElementById('modal-patient-name');
      const patientName = document.getElementById('patient-name').value;
  
      // Populate the modal with form details
      modalPatientName.value = patientName;
  
      // Show the modal after populating the details
      const consultationDetailsModal = new bootstrap.Modal(document.getElementById('consultationDetailsModal'));
      consultationDetailsModal.show();
    });
  