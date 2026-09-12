<?php
// Database connection
$host = "localhost";
$username = "root"; // Apna DB username daalein
$password = "";     // Apna DB password daalein
$dbname = "your_database_name"; // Apna DB name daalein

$conn = new mysqli($host, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$certificate_data = null;
$search_error = "";
$searched_id = "";

// Agar URL me ID ho (QR Code scan karne par) ya Form submit karne par
if (isset($_GET['cert_id']) || isset($_POST['search_cert'])) {
    $searched_id = isset($_GET['cert_id']) ? $_GET['cert_id'] : $_POST['certificate_id'];
    $searched_id = $conn->real_escape_string(trim($searched_id));

    if (!empty($searched_id)) {
        $sql = "SELECT * FROM certificates WHERE certificate_id = '$searched_id'";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            $certificate_data = $result->fetch_assoc();
        } else {
            $search_error = "Invalid Certificate ID. No record found!";
        }
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Certificate Verification Platform</title>
    <!-- Bootstrap 5 CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/html/bootstrap.min.css" rel="stylesheet">
    <!-- FontAwesome Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
    
    <style>
        body {
            font-family: 'Poppins', sans-serif;
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
        }
        .verification-card {
            background: rgba(255, 255, 255, 0.95);
            border-radius: 20px;
            box-shadow: 0 15px 35px rgba(0,0,0,0.1);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255,255,255,0.2);
            transition: all 0.3s ease;
        }
        .brand-logo {
            font-size: 24px;
            font-weight: 700;
            color: #2c3e50;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        .btn-search {
            background: #1e3c72;
            color: white;
            border-radius: 10px;
            padding: 12px 25px;
        }
        .btn-search:hover {
            background: #2a5298;
            color: white;
        }
        .status-badge {
            background-color: #2ecc71;
            color: white;
            padding: 6px 15px;
            border-radius: 50px;
            font-size: 14px;
            display: inline-block;
        }
        .detail-row {
            border-bottom: 1px dashed #e2e8f0;
            padding: 12px 0;
        }
        .detail-row:last-child {
            border-bottom: none;
        }
    </style>
</head>
<body>

<div class="container my-5">
    <div class="row justify-content-center">
        <div class="col-md-7 col-lg-6">
            
            <!-- Main Card -->
            <div class="verification-card p-4 p-md-5">
                <div class="text-center mb-4">
                    <div class="brand-logo mb-2"><i class="fa-solid fa-graduation-cap text-primary me-2"></i>EduVerify</div>
                    <p class="text-muted small">Verify Student Internships & Educational Certificates</p>
                </div>

                <!-- Search Form -->
                <form action="verify.php" method="POST" class="mb-4">
                    <div class="form-group">
                        <label class="form-label fw-bold text-secondary">Enter Certificate / User ID</label>
                        <div class="input-group mb-3">
                            <span class="input-group-text bg-white"><i class="fa-solid fa-id-card text-muted"></i></span>
                            <input type="text" name="certificate_id" class="form-control form-control-lg text-uppercase" placeholder="e.g. EDU-2026-001" value="<?php echo htmlspecialchars($searched_id); ?>" required>
                            <button class="btn btn-search" type="submit" name="search_cert">Verify</button>
                        </div>
                    </div>
                </form>

                <!-- Error Message -->
                <?php if (!empty($search_error)): ?>
                    <div class="alert alert-danger text-center border-0 rounded-3 shadow-sm" role="alert">
                        <i class="fa-solid fa-circle-xmark me-2"></i> <?php echo $search_error; ?>
                    </div>
                <?php endif; ?>

                <!-- Certificate Details Result -->
                <?php if ($certificate_data): ?>
                    <div class="result-box mt-4 p-4 border rounded-3 bg-light shadow-sm">
                        <div class="text-center mb-3">
                            <span class="status-badge"><i class="fa-solid fa-circle-check me-1"></i> <?php echo $certificate_data['status']; ?></span>
                            <h4 class="mt-3 fw-bold text-dark mb-0"><?php echo htmlspecialchars($certificate_data['student_name']); ?></h4>
                            <p class="text-muted small">Verified Student</p>
                        </div>
                        
                        <div class="mt-3">
                            <div class="d-flex justify-content-between detail-row">
                                <span class="text-muted">Certificate ID:</span>
                                <span class="fw-bold text-uppercase"><?php echo htmlspecialchars($certificate_data['certificate_id']); ?></span>
                            </div>
                            <div class="d-flex justify-content-between detail-row">
                                <span class="text-muted">Course/Internship:</span>
                                <span class="fw-bold text-end"><?php echo htmlspecialchars($certificate_data['course_name']); ?></span>
                            </div>
                            <div class="d-flex justify-content-between detail-row">
                                <span class="text-muted">Duration:</span>
                                <span class="fw-bold"><?php echo htmlspecialchars($certificate_data['internship_duration']); ?></span>
                            </div>
                            <div class="d-flex justify-content-between detail-row">
                                <span class="text-muted">Issue Date:</span>
                                <span class="fw-bold"><?php echo date('d M, Y', strtotime($certificate_data['issue_date'])); ?></span>
                            </div>
                        </div>

                        <div class="text-center mt-4">
                            <button class="btn btn-sm btn-outline-secondary" onclick="window.print()"><i class="fa-solid fa-print me-1"></i> Print Verification</button>
                        </div>
                    </div>
                <?php endif; ?>

            </div>
            
        </div>
    </div>
</div>

<!-- Bootstrap JS -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>